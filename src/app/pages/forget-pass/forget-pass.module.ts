import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPassPageRoutingModule } from './forget-pass-routing.module';

import { ForgetPassPage } from './forget-pass.page';
import { SharedModule } from 'src/app/Components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPassPageRoutingModule,
    SharedModule,
  ],
  declarations: [ForgetPassPage]
})
export class ForgetPassPageModule {}
