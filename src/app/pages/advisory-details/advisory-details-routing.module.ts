import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvisoryDetailsPage } from './advisory-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisoryDetailsPageRoutingModule {}
