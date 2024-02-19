import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './shared/pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedesk',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    title: 'Bienvenido a pokemon-fansub',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pokedesk',
    title: 'pokedesk',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
