import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectUsPageRoutingModule } from './connect-us-routing.module';

import { ConnectUsPage } from './connect-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectUsPageRoutingModule
  ],
  declarations: [ConnectUsPage]
})
export class ConnectUsPageModule {}
