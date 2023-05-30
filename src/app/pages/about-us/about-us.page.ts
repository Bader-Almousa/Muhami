import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor() {}

  ngOnInit() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phoneNumber = localStorage.getItem('phoneNumber');
  
    this.user.firstName = firstName ? firstName : '';
    this.user.lastName = lastName ? lastName : '';
    this.user.phoneNumber = phoneNumber ? phoneNumber : '';
  }

}
