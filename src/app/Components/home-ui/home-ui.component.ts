import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
})
export class HomeUIComponent  implements OnInit {

  constructor(private router: Router) { }

  nav(){
    this.router.navigate(['lawyers']);
  }

  ngOnInit() {}

}
