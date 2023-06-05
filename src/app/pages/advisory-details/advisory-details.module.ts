import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvisoryDetailsPageRoutingModule } from './advisory-details-routing.module';

import { AdvisoryDetailsPage } from './advisory-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvisoryDetailsPageRoutingModule
  ],
  declarations: [AdvisoryDetailsPage]
})
export class AdvisoryDetailsPageModule {}
