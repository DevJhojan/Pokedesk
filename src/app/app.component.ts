import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <div class="menu">
        <shared-btn-switch-theme (changeTheme)="toggleTheme($event)" />
        <shared-menu-and-history />
      </div>
      <router-outlet />
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _theme = "dark"
  private _key = "theme"
  title = 'Pokedesk';
  isLightTheme = false;

  constructor(){
    const storageTheme = localStorage.getItem(this._key);
    if(storageTheme) {
      this._theme = storageTheme;
      this.isLightTheme = storageTheme === 'light';
      document.body.classList.toggle('lightTheme', this.isLightTheme);
    }
  }

  toggleTheme($event:boolean) {
    this.isLightTheme =$event;
    if(this.isLightTheme==true)  this._theme = "light";
    else this._theme = "dark"
    localStorage.setItem(this._key, this._theme);
    document.body.classList.toggle('lightTheme', this.isLightTheme);
  }
}
