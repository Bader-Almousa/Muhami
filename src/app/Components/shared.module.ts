import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { HomeLIComponent } from './home-li/home-li.component';
import { ProfileLiComponent } from './profile-li/profile-li.component';
import { ProfileUiComponent } from './profile-ui/profile-ui.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ButtonComponent, HomeUIComponent, HomeLIComponent, ProfileLiComponent,ProfileUiComponent],
  imports: [CommonModule, IonicModule,FormsModule ],
  exports: [ButtonComponent, HomeUIComponent, HomeLIComponent, ProfileLiComponent,ProfileUiComponent],
})
export class SharedModule {}