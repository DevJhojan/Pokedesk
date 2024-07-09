import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PagesComponent } from './error404-pages/error404-pages.component';
import { BtnSwitchThemeComponent } from './components/btn-switch-theme/btn-switch-theme.component';
import { PictureComponent } from './components/picture/picture.component';
import { MenuAndHistoryComponent } from './components/menu-and-history/menu-and-history.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
@NgModule({
  declarations: [
    Error404PagesComponent,
    BtnSwitchThemeComponent,
    PictureComponent,
    MenuAndHistoryComponent,
    CardPokemonComponent
    ],
  imports:[CommonModule],
  exports: [
    Error404PagesComponent,
    BtnSwitchThemeComponent,
    PictureComponent,
    MenuAndHistoryComponent,
    CardPokemonComponent,
    ],
})
export class SharedModule {}
