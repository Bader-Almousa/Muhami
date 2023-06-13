import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  info = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  license: ''
  }

  isChecked: any;
  
  constructor(private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) { }

  onCheckboxChange(event: any) {
    if (!event.detail.checked) {
      this.isChecked = false;
    }
  }


  register(){

    if(this.isChecked == false){
      const formData = new FormData();
      formData.append('firstName', this.info.firstName);
      formData.append('lastName', this.info.lastName);
      formData.append('phoneNumber', this.info.phoneNumber);
      formData.append('email', this.info.email);
      formData.append('password', this.info.password);

    this.http.post('http://localhost/Projects/Muhami/Backend/registration.php', formData).subscribe(
      (response) => {
        console.log(response);

    // إنشاء وعرض رسالة تنبيه باستخدام اسم المستخدم
    const alertMessage = 'هلا ' + this.info.firstName + ' سجّل دخولك، واحفظ حقك واعرف اللي لك وعليك واستشر استشاراتك القانونية الان';
    this.presentAlert(alertMessage);

    // تحويل المستخدم إلى صفحة أخرى وتمرير الـ id المستخدم
    this.navCtrl.navigateForward('/login');
      },
      (error) => {
        console.log(error);
      }
    ); 
    }
    else {
      const formData = new FormData();
      formData.append('firstName', this.info.firstName);
      formData.append('lastName', this.info.lastName);
      formData.append('phoneNumber', this.info.phoneNumber);
      formData.append('email', this.info.email);
      formData.append('password', this.info.password);
      formData.append('license', this.info.license);

      this.http.post('http://localhost/Projects/Muhami/Backend/registration.php', formData).subscribe(
      (response) => {
        console.log(response);
        // إنشاء وعرض رسالة تنبيه باستخدام اسم المستخدم
      const alertMessage = 'هلا بالمحامي ' + this.info.firstName + ' سجّل دخولك وحدّث بياناتك وابدا على بركة الله شغلك';
      this.presentAlert(alertMessage);

      // تحويل المستخدم إلى صفحة أخرى وتمرير الـ id المستخدم
      this.navCtrl.navigateForward('/login');
      },
      (error) => {
        console.log(error);
      }
    );
      }

    }

    async presentAlert(mess: any) {
      const alert = await this.alertController.create({
        message: mess,
        buttons: ['حسنًا']
      });

      await alert.present();  
    }

    ngOnInit() {
    
    }

}


  