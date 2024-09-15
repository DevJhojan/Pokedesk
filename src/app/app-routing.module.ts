import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './shared/error404-pages/error404-pages.component';
import { AllPokemonsComponent } from './common/all-pokemons/all-pokemons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Pokedesk',
    pathMatch: 'full',
  },
  {
    path: 'Pokedesk',
    title: 'Busca tu Pokemon',
    component: AllPokemonsComponent
  },
  {
    path: '404',
    component: Error404PagesComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
