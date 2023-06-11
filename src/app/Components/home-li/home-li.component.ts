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
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const specialized = localStorage.getItem('specialized');
      const path = localStorage.getItem('path');
      const image = localStorage.getItem('image');
  
      this.lawyer.id = id ? id : '';
      this.lawyer.firstName = firstName ? firstName : '';
      this.lawyer.lastName = lastName ? lastName : '';
      this.lawyer.specialized = specialized ? specialized : '';
      this.lawyer.path = path ? path : '';
      this.lawyer.image = image ? image : '';
  }

}
