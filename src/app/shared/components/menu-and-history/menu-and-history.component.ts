import { Component } from '@angular/core';
import { Menu } from 'src/app/data/pokemon.data';

@Component({
  selector: 'shared-menu-and-history',
  standalone: false,
  templateUrl: './menu-and-history.component.html',
  styleUrls: ['./menu-and-history.component.scss']
})
export class MenuAndHistoryComponent {
  items_menu: string[] = Menu;
}
