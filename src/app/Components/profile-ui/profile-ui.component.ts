import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-ui',
  templateUrl: './profile-ui.component.html',
  styleUrls: ['./profile-ui.component.scss'],
})
export class ProfileUiComponent  implements OnInit {

  
  firstName: any;
  lastName: any;
  phoneNumber: any;
  email: any;
  password: any;
  license: any;

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

  ngOnInit() {}

}
