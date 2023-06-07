import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.page.html',
  styleUrls: ['./lawyers.page.scss'],
})
export class LawyersPage {
  lawyers: any[] = [];
  selectedLawyerId: any;
  id: any;

  constructor(private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController) { }

  ngOnInit() {
    this.fetchLawyers();
  }

  dataURI(base64String: string) {
    return 'data:image/png;base64,' + base64String;
  }

  fetchLawyers() {
    this.http.get<any[]>('http://localhost/Projects/Muhami/Backend/showLawyers.php').subscribe((data: any[]) => {
  this.lawyers = data;
});
  }

  send(lawyerId: number) {

    localStorage.setItem('selectedLawyerId', lawyerId.toString());
      
      const id = localStorage.getItem('id');
      this.id = id ? id : '';
      this.selectedLawyerId = lawyerId;
      
      const formData = new FormData();
      formData.append('userID', this.id);
      formData.append('lawyerID', this.selectedLawyerId);

    this.http.post('http://localhost/Projects/Muhami/Backend/insertForeignKey.php', formData).subscribe(
      (response) => {
        console.log(response);
        
    // إنشاء وعرض رسالة تنبيه باستخدام اسم المستخدم
    const alertMessage = 'قم بكتابة تفاصيل استشارتك هنا';
    this.presentAlert(alertMessage);

    // تحويل المستخدم إلى صفحة أخرى وتمرير الـ id المستخدم
    this.navCtrl.navigateForward('/advisory');
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