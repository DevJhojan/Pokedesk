//*modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//*componentes
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PokemonService } from '../Service';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    LayoutComponent,
    ListPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    NgxChartsModule
  ],
  providers:[
    PokemonService,
  ]
})
export class HomeModule { }
