import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  ListPokemonComponent,
  PokemonDetailComponent,
  SearchPokemonComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
