import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LoginComponent, SingupComponent } from './pages';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
