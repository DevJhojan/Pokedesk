//*modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MatTableModule} from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//*componentes
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { PokemonService } from '../Service';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    ListPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    NgxChartsModule,
  ],
  providers:[
    PokemonService,
  ]
})
export class HomeModule { }
