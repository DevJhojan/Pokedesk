import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent, SearchPokemonComponent } from './pages';
import { PagesHomeComponent } from '@layouts/*';

const routes: Routes = [
  {
    path: '',
    component: PagesHomeComponent,
    children: [
      {
        path: 'search',
        component: SearchPokemonComponent,
      },
      {
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
      },
      {
        path: 'login',
        loadComponent: ()=> import('./auth/login/login.component').then( login => login.LoginComponent ),
      },
      {
        path: 'sing_up',
        loadComponent: ()=> import('./auth/sing_up/sing_up.component').then( sing_up => sing_up.SingUpComponent ),
      },
      {
        path: '**',
        redirectTo: 'search',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
