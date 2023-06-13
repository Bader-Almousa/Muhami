import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-li',
  templateUrl: './profile-li.component.html',
  styleUrls: ['./profile-li.component.scss'],
})
export class ProfileLiComponent  implements OnInit {

  user = {
    id: '',
    image: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    license: '',
    specialized: '',
    path: '',
    advisoryPrice: '',
  };
  
  constructor(private loadingCtrl: LoadingController, private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) {}

    ngOnInit() {
      const id = localStorage.getItem('id');
      const image = localStorage.getItem('image');
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const license = localStorage.getItem('license');
      const specialized = localStorage.getItem('specialized');
      const path = localStorage.getItem('path');
      const advisoryPrice = localStorage.getItem('advisoryPrice');
  
      this.user.id = id ? id : '';
      this.user.image = image ? image : '';
      this.user.firstName = firstName ? firstName : '';
      this.user.lastName = lastName ? lastName : '';
      this.user.phoneNumber = phoneNumber ? phoneNumber : '';
      this.user.email = email ? email : '';
      this.user.password = password ? password : '';
      this.user.license = license ? license : '';
      this.user.specialized = specialized ? specialized : '';
      this.user.path = path ? path : '';
      this.user.advisoryPrice = advisoryPrice ? advisoryPrice : '';
    }
  
    async presentAlert(mess: any) {
      setTimeout(async () => {
        const alert = await this.alertController.create({
          message: mess,
          buttons: ['حسنًا'],
        });
        await alert.present();
      }, 1650); // تأخير ظهور الـ Alert لمدة 5 ثواني
    }

    async save() {

        const loading = await this.loadingCtrl.create({
          message: 'جاري الحفظ',
          duration: 1500,
          spinner: 'circles'
        });
        loading.present();

    const formData = new FormData();
      formData.append('id', this.user.id);
      formData.append('image', this.user.image);
      formData.append('firstName', this.user.firstName);
      formData.append('lastName', this.user.lastName);
      formData.append('phoneNumber', this.user.phoneNumber);
      formData.append('email', this.user.email);
      formData.append('license', this.user.license);
      formData.append('specialized', this.user.specialized);
      formData.append('path', this.user.path);
      formData.append('advisoryPrice', this.user.advisoryPrice);

    this.http.post('http://localhost/Projects/Muhami/Backend/updateLawyerInfo.php', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        // إنشاء وعرض رسالة تنبيه باستخدام اسم المستخدم
        const alertMessage = 'شكرا ' + this.user.firstName + '، تم تحديث بياناتك بنجاح';
        this.presentAlert(alertMessage);
        console.log(error);
      }
    );
    setTimeout(() => {
      this.http.post('http://localhost/Projects/Muhami/Backend/login.php', this.user).subscribe(
      (response: any) => {
        if (response.success && response.isLawyer) {
          // Handle successful lawyer login
          console.log(response.message);
          localStorage.setItem('id', response.id);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
          localStorage.setItem('phoneNumber', response.phoneNumber);
          localStorage.setItem('email', response.email);
          localStorage.setItem('license', response.license);
          localStorage.setItem('specialized', response.specialized);
          localStorage.setItem('path', response.path);
          localStorage.setItem('advisoryPrice', response.advisoryPrice);
          localStorage.setItem('image', response.image);
          localStorage.setItem('isLawyer', response.isLawyer);
        } 
        else if(response.success && response.isLawyer == false) {
          // Handle successful user login
          console.log(response.message);
          localStorage.setItem('id', response.id);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
          localStorage.setItem('phoneNumber', response.phoneNumber);
          localStorage.setItem('email', response.email);
          localStorage.setItem('image', response.image);
          localStorage.setItem('isLawyer', response.isLawyer);
        }
        else{
          // Handle unsuccessful login
          console.log(response.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, 2000);
    }

  updateProfilePicture(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.user.image = e.target.result as string;
        }
      };
      fileReader.readAsDataURL(fileInput.files[0]);
    }
  }

}
