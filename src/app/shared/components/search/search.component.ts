import { Component } from '@angular/core';

@Component({
  selector: 'shared-search',
  standalone: false,
  template:`
    <div class="search">
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

}
