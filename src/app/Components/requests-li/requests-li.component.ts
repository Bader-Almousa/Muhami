import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-requests-li',
  templateUrl: './requests-li.component.html',
  styleUrls: ['./requests-li.component.scss'],
})
export class RequestsLiComponent  implements OnInit {

  requests: any[] = [];
  id: any;

  
  ngOnInit() {
    this.fetchRequests();
  }

  segment: string = 'waiting';

  activeOrders: any[] = [];
  finishedOrders: any[] = [];

  constructor(private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) {}

    fetchRequests() {
        const lawyerId = localStorage.getItem('id');
        this.http.get<any[]>(`http://localhost/Projects/Muhami/Backend/showLawyerRequests.php?lawyerID=${lawyerId}`).subscribe((data: any[]) => {
        this.requests = data.filter(request => request.advisoryStatus === 'waiting');
        this.activeOrders = data.filter(request => request.advisoryStatus === 'active');
        this.finishedOrders = data.filter(request => request.advisoryStatus === 'finished');
      });
    }

    async acceptOrder(order: any) {
      const result = await this.http.post('http://localhost/Projects/Muhami/Backend/updateAdvisoryStatus.php', {
        advisoryID: order.advisoryID,
        advisoryStatus: 'active'
      }).toPromise();
  
      if (result) {
        this.fetchRequests();
      }
    }

  rejectOrder(order: { id: number }) {
    const index = this.requests.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.requests.splice(index, 1);
      this.finishedOrders.push(order);
    }
  }

  async finishOrder(order: any) {
    const result = await this.http.post('http://localhost/Projects/Muhami/Backend/updateAdvisoryStatus.php', {
      advisoryID: order.advisoryID,
      advisoryStatus: 'finished',
      advisoryAnswer: order.response
    }).toPromise();

    if (result) {
      this.fetchRequests();
    }
  }

  async showContent(order: any) {
    const alert = await this.alertController.create({
      header: 'محتوى الإستشارة',
      message: order.advisoryContent,
      buttons: ['موافق'],
      cssClass: 'alert-custom-font', // إضافة cssClass هنا
    });
  
    await alert.present();
  }

  async showReplyBox(order: any) {
    const alert = await this.alertController.create({
      header: 'كتابة الرد',
      inputs: [
        {
          name: 'response',
          type: 'textarea',
          placeholder: 'أدخل ردك هنا...',
        },
      ],
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
        },
        {
          text: 'إنهاء',
          handler: async (data) => {
            order.response = data.response;
            await this.finishOrder(order);
          },
        },
      ],
    });

    await alert.present();
  }

}
