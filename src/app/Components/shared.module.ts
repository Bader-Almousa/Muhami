import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { HomeLIComponent } from './home-li/home-li.component';
import { ProfileLiComponent } from './profile-li/profile-li.component';
import { ProfileUiComponent } from './profile-ui/profile-ui.component';
import { FormsModule } from '@angular/forms';
import { RequestsLiComponent } from './requests-li/requests-li.component';
import { RequestsUiComponent } from './requests-ui/requests-ui.component';
@NgModule({
  declarations: [ButtonComponent, HomeUIComponent, HomeLIComponent, ProfileLiComponent,ProfileUiComponent,RequestsLiComponent,RequestsUiComponent],
  imports: [CommonModule, IonicModule,FormsModule ],
  exports: [ButtonComponent, HomeUIComponent, HomeLIComponent, ProfileLiComponent,ProfileUiComponent,RequestsLiComponent,RequestsUiComponent],
})
export class SharedModule {}