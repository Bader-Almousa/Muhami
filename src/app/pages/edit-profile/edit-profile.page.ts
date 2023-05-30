import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  info = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    license: ''
  };
  isLawyer = false;

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    // استدعاء الـ API لاسترجاع معلومات المستخدم
    const id = localStorage.getItem('userId');
    const isLawyer = localStorage.getItem('isLawyer');
    const formData = new FormData();
    if (id) {
      formData.append('id', id);
    }
    if (isLawyer) {
      formData.append('isLawyer', isLawyer);
    }
    this.isLawyer = isLawyer === 'true';

    this.http
      .post('http://localhost/Projects/Muhami/Backend/getUser.php', formData)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.info.id = response.data.id;
          this.info.firstName = response.data.firstName;
          this.info.lastName = response.data.lastName;
          this.info.phoneNumber = response.data.phoneNumber;
          this.info.email = response.data.email;
          this.info.password = response.data.password;
          if (this.isLawyer) {
            this.info.license = response.data.license;
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateProfile() {
    // إرسال البيانات المحدثة إلى الـ API لتحديثها في قاعدة البيانات
    const formData = new FormData();
    formData.append('id', this.info.id);
    formData.append('firstName', this.info.firstName);
    formData.append('lastName', this.info.lastName);
    formData.append('phoneNumber', this.info.phoneNumber);
    formData.append('email', this.info.email);
    formData.append('password', this.info.password);
    if (this.isLawyer) {
      formData.append('license', this.info.license);
    }

    this.http
      .post('http://localhost/Projects/Muhami/Backend/updateUser.php', formData)
      .subscribe(
        (response) => {
          console.log(response);
          const alertMessage = 'تم تحديث المعلومات الشخصية بنجاح';
          this.presentAlert(alertMessage);
          this.navCtrl.navigateForward('/tabs/home');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async presentAlert(mess: any) {
    const alert = await this.alertController.create({
      message: mess,
      buttons: ['حسنًا'],
    });

    await alert.present();
  }
}
