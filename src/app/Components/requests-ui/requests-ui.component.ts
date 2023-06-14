import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-requests-ui',
  templateUrl: './requests-ui.component.html',
  styleUrls: ['./requests-ui.component.scss'],
})
export class RequestsUiComponent  implements OnInit {

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
        const userId = localStorage.getItem('id');
        this.http.get<any[]>(`http://localhost/Projects/Muhami/Backend/showRequests.php?userID=${userId}`).subscribe((data: any[]) => {
        this.requests = data.filter(request => request.advisoryStatus === 'waiting');
        this.activeOrders = data.filter(request => request.advisoryStatus === 'active');
        this.finishedOrders = data.filter(request => request.advisoryStatus === 'finished');
      });
    }

    async showContent(order: any) {
      const alert = await this.alertController.create({
        header: 'رد الإستشارة',
        message: order.advisoryAnswer,
        buttons: ['موافق'],
        cssClass: 'alert-custom-font', // إضافة cssClass هنا
      });
    
      await alert.present();
    }
}
