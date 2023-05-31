import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.page.html',
  styleUrls: ['./advisory.page.scss'],
})
export class AdvisoryPage implements OnInit {

  constructor(private router: Router) {}

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit() {
  }

}
