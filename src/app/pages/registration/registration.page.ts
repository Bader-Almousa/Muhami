import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  firstName: any;
  lastName: any;
  email: any;
  password: any;

  constructor(public _apiService: ApiService) { }
  

  addUser(){
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }

    this._apiService.addUser(data)
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log("Complete")
    });
  }


  ngOnInit() {
    
  }
  
  
}
