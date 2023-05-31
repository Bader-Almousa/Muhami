import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isLawyer: any;

  constructor() {}

  ngOnInit() {
    const isLawyer = localStorage.getItem('isLawyer');
    this.isLawyer = isLawyer === 'true';
  }
}