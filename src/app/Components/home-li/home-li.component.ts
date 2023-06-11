import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-li',
  templateUrl: './home-li.component.html',
  styleUrls: ['./home-li.component.scss'],
})
export class HomeLIComponent  implements OnInit {


  lawyer = {
    id: '',
    image: '',
    firstName: '',
    lastName: '',
    specialized: '',
    path: '',
  };

  
  constructor() { }

  ngOnInit() {
    const id = localStorage.getItem('id');
      const image = localStorage.getItem('image');
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const email = localStorage.getItem('email');
      const license = localStorage.getItem('license');
      const specialized = localStorage.getItem('specialized');
      const path = localStorage.getItem('path');
      const advisoryPrice = localStorage.getItem('advisoryPrice');
  
      this.lawyer.id = id ? id : '';
      this.lawyer.image = image ? image : '';
      this.lawyer.firstName = firstName ? firstName : '';
      this.lawyer.lastName = lastName ? lastName : '';
      this.lawyer.specialized = specialized ? specialized : '';
      this.lawyer.path = path ? path : '';
  }

}
