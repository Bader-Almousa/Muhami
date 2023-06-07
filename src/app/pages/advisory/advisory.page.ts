import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.page.html',
  styleUrls: ['./advisory.page.scss'],
})
export class AdvisoryPage implements OnInit {
  selectedLawyerId: any;
  advisory = {
    id: '',
    advisoryTitle: '',
    advisoryType: '',
    advisoryContent: '',
    advisoryStatus: 'waiting'
  };

  constructor(private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) { }

  ngOnInit() {
    this.selectedLawyerId = localStorage.getItem('selectedLawyerId');
  }

  submitAdvisory() {
    const userID = localStorage.getItem('id');
    this.advisory.id = userID ? userID : '';

    const lawyerID = this.selectedLawyerId;
    this.selectedLawyerId = lawyerID ? lawyerID : '';

    console.log(userID,' ',this.selectedLawyerId)
  
    const formData = new FormData();
    formData.append('userID', this.advisory.id);
    formData.append('lawyerID', lawyerID);
    formData.append('advisoryTitle', this.advisory.advisoryTitle);
    formData.append('advisoryType', this.advisory.advisoryType);
    formData.append('advisoryContent', this.advisory.advisoryContent);
    formData.append('advisoryStatus', this.advisory.advisoryStatus);
  
    this.http.post('http://localhost/Projects/Muhami/Backend/updateAdvisory.php', formData).subscribe(
      (response) => {
        console.log(response);

        // إنشاء وعرض رسالة تنبيه باستخدام اسم المستخدم
        const alertMessage = 'تم ارسال إستشارتك الى المحامي بنجاح! يمكنك متابعة حالة الإستشارة في قسم الطلبات';
        this.presentAlert(alertMessage);

        // تحويل المستخدم إلى صفحة أخرى وتمرير الـ id المستخدم
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
      buttons: ['حسنًا']
    });

    await alert.present();  
  }

}