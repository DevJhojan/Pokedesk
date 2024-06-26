import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './shared/error404-pages/error404-pages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedesk',
    pathMatch: 'full',
  },
  {
    path: 'pokedesk',
    title: 'Busca tu Pokemon',
    //loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
