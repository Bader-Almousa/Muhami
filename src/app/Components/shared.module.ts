import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { HomeLIComponent } from './home-li/home-li.component';

@NgModule({
  declarations: [ButtonComponent, HomeUIComponent, HomeLIComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent, HomeUIComponent, HomeLIComponent],
})
export class SharedModule {}