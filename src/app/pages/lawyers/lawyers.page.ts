import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.page.html',
  styleUrls: ['./lawyers.page.scss'],
})
export class LawyersPage {
  lawyers: any[] = [];
  selectedLawyerId: any;
  id: any;
  path: any;

  private searchSubject = new Subject<string>();

  constructor(private http: HttpClient, 
    public alertController: AlertController, 
    public navCtrl: NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.path = this.route.snapshot.paramMap.get('path');
    this.fetchLawyers();

    this.searchSubject
    .pipe(debounceTime(300))
    .subscribe((searchText) => this.fetchLawyers(searchText));

  }

  searchLawyers(event: any) {
    const searchText = event.target.value;
    this.searchSubject.next(searchText);
  }

  fetchLawyers(searchText: string = '') {
    this.http
    .get<any[]>(`http://localhost/Projects/Muhami/Backend/showLawyers.php?path=${this.path}&search=${searchText}`)
    .subscribe((data: any[]) => {
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