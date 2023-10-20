//*modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MatTableModule} from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//*componentes
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { PokemonService } from '../Service';
import { MatButtonModule } from '@angular/material/button';

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
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxChartsModule,
  ],
  providers:[
    PokemonService,
  ]
})
export class HomeModule { }
