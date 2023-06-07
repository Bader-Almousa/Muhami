import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  isLawyer: any;
  
  ngOnInit(){
    const isLawyer = localStorage.getItem('isLawyer');
    this.isLawyer = isLawyer === 'true';
  }
  
}