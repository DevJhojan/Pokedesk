import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';
import { ListPomemonComponent } from './Components/list-pomemon/list-pomemon.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/listPokemon' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent, children: [
    {path: 'listPokemon', component: ListPomemonComponent},
    {path: 'pokemonDetail/:pokemonId', component:PokemonDetailComponent}   
  ] },
  { path: '**', redirectTo: '/home/listPokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
