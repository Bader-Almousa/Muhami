import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-li',
  templateUrl: './profile-li.component.html',
  styleUrls: ['./profile-li.component.scss'],
})
export class ProfileLiComponent  implements OnInit {

  firstName: any;
  lastName: any;
  phoneNumber: any;
  email: any;
  password: any;
  license: any;

  isChecked: any;
  photo = '.\assets\img\FinallogoGold.png';
  
  constructor() { }

  ngOnInit() {}

}
