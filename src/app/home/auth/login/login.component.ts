import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <form class="column txt-center" (submit)="login()">
      <label for="login_email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="login_email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <label for="login_password">Password</label>
      <input
        type="password"
        class="form-control"
        id="login_password"
        placeholder="Password"
      />
      <div>
        <button type="submit" class="bg-red">Submit</button>
        <button [routerLink]="['/pokedesk/sing_up']" routerLinkActive="router-link-active">
          Sing Up
        </button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private _router: Router){

  }
  login(){
    this._router.navigate(['/pokedesk/search']);
  }
}
