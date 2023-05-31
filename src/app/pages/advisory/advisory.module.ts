import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvisoryPageRoutingModule } from './advisory-routing.module';

import { AdvisoryPage } from './advisory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvisoryPageRoutingModule
  ],
  declarations: [AdvisoryPage]
})
export class AdvisoryPageModule {}
