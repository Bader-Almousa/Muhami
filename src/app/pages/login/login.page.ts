import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  info = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  async login() {

    const loading = await this.loadingCtrl.create({
      message: 'جاري الحفظ',
      duration: 3000,
      spinner: 'circles'
    });
    loading.present();

    this.http.post('http://localhost/Projects/Muhami/Backend/login.php', this.info).subscribe(
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
          this.router.navigate(['/tabs/home']);
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
          localStorage.setItem('lawyers', response.lawyers);
          localStorage.setItem('isLawyer', response.isLawyer);
          this.router.navigate(['/tabs/home']);
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
  }
}