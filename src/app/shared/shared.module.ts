import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PagesComponent } from './error404-pages/error404-pages.component';
import { BtnSwitchThemeComponent } from './components/btn-switch-theme/btn-switch-theme.component';
import { PictureComponent } from './components/picture/picture.component';
import { MenuAndHistoryComponent } from './components/menu-and-history/menu-and-history.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { SearchComponent } from './components/search/search.component';
import { GraphicMeterComponent } from './components/graphic-meter/graphic-meter.component';
@NgModule({
  declarations: [
    Error404PagesComponent,
    BtnSwitchThemeComponent,
    PictureComponent,
    MenuAndHistoryComponent,
    CardPokemonComponent,
    SearchComponent,
    GraphicMeterComponent
    ],
  imports:[CommonModule],
  exports: [
    Error404PagesComponent,
    BtnSwitchThemeComponent,
    PictureComponent,
    MenuAndHistoryComponent,
    CardPokemonComponent,
    SearchComponent,
    ],
})
export class SharedModule {}
