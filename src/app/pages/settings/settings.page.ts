import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  logout(){
    this.navCtrl.navigateForward('/login');
  }


  

}
