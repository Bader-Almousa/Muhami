import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  Services: any[] = [
    {id: 1, name: 'مراجعة العقود', src: 'assets/img/Contracts.png', page: './connect-us/connect-us.page.html'},
    {id: 1, name: 'الخدمات القانونية', src: 'assets/img/LegalServices.png', page: ''},
    {id: 1, name: 'الاستشارات القانونية', src: 'assets/img/Advisorys.png', page: ''},
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
