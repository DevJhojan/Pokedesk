import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, SingupComponent } from './pages';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PagesAuthComponent } from '../layouts';


const routes: Routes = [
  {
    path: '',
    component: PagesAuthComponent,
    children:[
      {
        path: 'login', component: LoginComponent,
      },
      {path: 'singup', component: SingupComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
