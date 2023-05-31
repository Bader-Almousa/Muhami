import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile-ui',
  templateUrl: './profile-ui.component.html',
  styleUrls: ['./profile-ui.component.scss'],
})
export class ProfileUiComponent  implements OnInit {

  
  user = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    imageUrl: 'https://docs-demo.ionic.io/assets/madison.jpg'
  };


  photo = '.\assets\img\FinallogoGold.png';
  

  constructor(private loadingCtrl: LoadingController, private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) {}

    ngOnInit() {
      const id = localStorage.getItem('id');
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const email = localStorage.getItem('email');
  
      this.user.id = id ? id : '';
      this.user.firstName = firstName ? firstName : '';
      this.user.lastName = lastName ? lastName : '';
      this.user.phoneNumber = phoneNumber ? phoneNumber : '';
      this.user.email = email ? email : '';
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
      formData.append('firstName', this.user.firstName);
      formData.append('lastName', this.user.lastName);
      formData.append('phoneNumber', this.user.phoneNumber);
      formData.append('email', this.user.email);

    this.http.post('http://localhost/Projects/Muhami/Backend/updateInfo.php', formData).subscribe(
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
    }

  updateProfilePicture(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.user.imageUrl = e.target.result as string;
        }
      };
      fileReader.readAsDataURL(fileInput.files[0]);
    }
  }

}
