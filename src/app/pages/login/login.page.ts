import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;

  constructor(public _apiService: ApiService, private router: Router) {}

  login() {

    let logininfo = {
      email: this.email,
      password: this.password
    }

    this._apiService.login(logininfo)
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.router.navigate(['/tabs/home'])
    });
  }


    ngOnInit() {
    }
  
}