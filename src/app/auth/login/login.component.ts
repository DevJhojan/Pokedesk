import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  constructor(private _route: Router){

  }
  login(){
    this._route.navigate(['/pokedesk/search']);
  }
}
