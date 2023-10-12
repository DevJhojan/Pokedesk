import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

@NgModule({
  declarations: [LayoutComponent, LoginComponent, SingupComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
