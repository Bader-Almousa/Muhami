import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  isLawyer: any;
  constructor(

  ) {}

  ngOnInit() {
    const isLawyer = localStorage.getItem('isLawyer');
    this.isLawyer = isLawyer === 'true';
  }

}
