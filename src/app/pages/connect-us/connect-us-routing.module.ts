import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectUsPage } from './connect-us.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectUsPageRoutingModule {}
