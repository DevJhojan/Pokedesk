import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sing_up.component.html',
  styleUrls: ['./sing_up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingUpComponent { }
