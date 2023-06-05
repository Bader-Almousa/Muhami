import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-li',
  templateUrl: './home-li.component.html',
  styleUrls: ['./home-li.component.scss'],
})
export class HomeLIComponent  implements OnInit {


  lawyer = {
    name: 'أحمد محمد',
    specialization: 'محامي تجاري',
    consultation: 'استشارات قانونية مجانية',
    profileImage: '',
    clients: 50,
    cases: 120,
    awards: 10,
    responseTime: 2,
  };

  
  constructor() { }

  ngOnInit() {}

}
