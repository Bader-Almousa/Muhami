import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-profile-ui',
  templateUrl: './profile-ui.component.html',
  styleUrls: ['./profile-ui.component.scss'],
})
export class ProfileUiComponent  implements OnInit {

  
  user = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  isChecked: any;
  photo = '.\assets\img\FinallogoGold.png';
  

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'جاري الحفظ',
      duration: 1000,
      spinner: 'circles'
    });

    loading.present();
  }

  ngOnInit() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const email = localStorage.getItem('email');
  
    this.user.firstName = firstName ? firstName : '';
    this.user.lastName = lastName ? lastName : '';
    this.user.phoneNumber = phoneNumber ? phoneNumber : '';
    this.user.email = email ? email : '';
  }
}
