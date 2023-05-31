import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-li',
  templateUrl: './profile-li.component.html',
  styleUrls: ['./profile-li.component.scss'],
})
export class ProfileLiComponent  implements OnInit {

  photo = '.\assets\img\FinallogoGold.png';
  
  constructor() { }

  ngOnInit() {}

}
