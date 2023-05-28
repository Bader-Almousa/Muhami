import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-ui',
  templateUrl: './profile-ui.component.html',
  styleUrls: ['./profile-ui.component.scss'],
})
export class ProfileUiComponent  implements OnInit {

  
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
