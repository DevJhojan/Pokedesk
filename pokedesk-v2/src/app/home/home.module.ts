import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';


@NgModule({
  declarations: [
    PokemonDetailComponent,
    LayoutComponent,
    ListPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
