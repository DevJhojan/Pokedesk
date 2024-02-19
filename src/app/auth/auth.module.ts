import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [LoginComponent, SingupComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
