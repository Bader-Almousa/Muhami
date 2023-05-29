import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})


export class RequestsPage implements OnInit {
  ngOnInit() {
    
  }

  
 
  segment: string = 'waiting';
  waitingOrders = [
    {
      id: 1,
      sender: 'أحمد',
      date: new Date(),
      type: 'نوع الطلب 1',
    },
    {
      id: 2,
      sender: 'محمد',
      date: new Date(),
      type: 'نوع الطلب 2',
    },
  ];
  activeOrders: any[] =[];
  finishedOrders: any[]= [];

  constructor() {}

  acceptOrder(order: { id: number; }) {
    const index = this.waitingOrders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.waitingOrders.splice(index, 1);
      this.activeOrders.push(order);
    }
  }

  rejectOrder(order: { id: number; }) {
    const index = this.waitingOrders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.waitingOrders.splice(index, 1);
    }
  }

  finishOrder(order: { id: any; }) {
    const index = this.activeOrders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.activeOrders.splice(index, 1);
      this.finishedOrders.push(order);
    }
  }





  


}




