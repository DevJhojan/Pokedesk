import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PagesComponent } from './error404-pages/error404-pages.component';
import { BtnSwitchThemeComponent } from './components/btn-switch-theme/btn-switch-theme.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [Error404PagesComponent, BtnSwitchThemeComponent, PictureComponent],
  exports: [Error404PagesComponent, BtnSwitchThemeComponent, PictureComponent],
})
export class SharedModule {}
