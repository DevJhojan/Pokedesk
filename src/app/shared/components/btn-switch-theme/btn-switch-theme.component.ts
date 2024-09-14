import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-btn-switch-theme',
  template: `
    <div (click)="toogleTheme()">
      <img *ngIf="!isLight" src="assets/img/moon.png" alt="change theme dark" />
      <img *ngIf="isLight" src="assets/img/sun.png" alt="chage theme light" />
    </div>
  `,
  styleUrls: ['./btn-switch-theme.component.scss'],
})
export class BtnSwitchThemeComponent implements OnInit {
  private _theme = 'dark';
  private _key = 'theme';
  @Output() changeTheme: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLight: boolean = false;

  constructor() {
    const storageTheme = localStorage.getItem(this._key);
    if (storageTheme) {
      this._theme = storageTheme;
      this.isLight = storageTheme === 'light';
      this.changeTheme.emit(this.isLight);
    }
  }

  ngOnInit() {}
  toogleTheme() {
    this.isLight = !this.isLight;
    if (this.isLight == true) this._theme = 'light';
    else this._theme = 'dark';
    localStorage.setItem(this._key, this._theme);
    this.changeTheme.emit(this.isLight);
  }
}
