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
  phoneNumber: any;
  email: any;
  password: any;
  license: any;

  isChecked: any;
  
  constructor(public _apiService: ApiService) { }

  onCheckboxChange(event: any) {
    if (!event.detail.checked) {
      this.isChecked = false;
    }
  }


  login(){

    if(this.isChecked == false){
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        password: this.password,
      }

    this._apiService.addUser(data)
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log("Complete")
    });
    }else {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        password: this.password,
        license: this.license
      }

    this._apiService.addLawer(data)
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log("Complete")
    });
    }

  }


  ngOnInit() {
    
  }
}