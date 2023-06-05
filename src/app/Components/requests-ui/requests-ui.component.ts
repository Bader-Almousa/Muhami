import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requests-ui',
  templateUrl: './requests-ui.component.html',
  styleUrls: ['./requests-ui.component.scss'],
})
export class RequestsUiComponent  implements OnInit {

  
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

 

 

  

}
