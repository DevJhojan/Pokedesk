import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListPokemonComponent,
  PokemonDetailComponent,
  SearchPokemonComponent,
} from './pages';
import { PagesHomeComponent } from '../layouts';

const routes: Routes = [
  {
    path: '',
    component: PagesHomeComponent,
    children: [
      {
        path: 'list',
        component: ListPokemonComponent,
      },
      {
        path: 'search',
        component: SearchPokemonComponent,
      },
      {
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
