import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requests-li',
  templateUrl: './requests-li.component.html',
  styleUrls: ['./requests-li.component.scss'],
})
export class RequestsLiComponent  implements OnInit {

  ngOnInit() {}

  segment: string = 'waiting';
  waitingOrders = [
    {
      id: 1,
      sender: 'أحمد',
      date: new Date(),
      type: 'نوع الطلب 1',
      content: 'هلا والله',
    },
    {
      id: 2,
      sender: 'محمد',
      date: new Date(),
      type: 'نوع الطلب 2',
    },
  ];
  activeOrders: any[] = [];
  finishedOrders: any[] = [];

  constructor(private alertController: AlertController) {}

  acceptOrder(order: { id: number }) {
    const index = this.waitingOrders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.waitingOrders.splice(index, 1);
      this.activeOrders.push(order);
    }
  }

  rejectOrder(order: { id: number }) {
    const index = this.waitingOrders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.waitingOrders.splice(index, 1);
      this.finishedOrders.push(order);
    }
  }

  finishOrder(order: { id: number }) {
    const index = this.activeOrders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.activeOrders.splice(index, 1);
      this.finishedOrders.push(order);
    }
  }

  async showContent(order: any) {
    const alert = await this.alertController.create({
      header: 'محتوى الاستشارة',
      message: order.content,
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
          handler: (data) => {
            order.response = data.response;
            this.finishOrder(order);
          },
        },
      ],
    });

    await alert.present();
  }

}
