import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IEntityModel } from '@models/*';
import { PokemonService } from '@services/*';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  enablePaginator: boolean = true;
  pokemonsNames: IEntityModel[] = [];
  searchGroup: FormGroup;
  selector = '.main-panel';
  search = new FormControl<string>('');
  limit: number = 100;
  length = 10;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent: PageEvent;
  dataSource: any;
  constructor(
    private pokemonService: PokemonService,
    private router: Router) {
    this.pageEvent = new PageEvent();
    this.getPokemons();
    this.searchGroup = new FormGroup({
      searchInput: new FormControl<String>(''),
    });
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.paginator ? (this.dataSource.paginator = this.paginator) : '';
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    const startIndex = e.pageIndex * e.pageSize;
    const endIndex = startIndex + e.pageSize;
    const dataSlice = this.pokemonsNames.slice(startIndex, endIndex);
    this.dataSource.data = dataSlice;
  }
  updatePaginator() {
    this.length = this.dataSource.data.length;
    this.paginator.length = this.length;
    this.paginator.pageSize = this.pageSize;
    this.paginator.pageIndex = this.pageIndex;
    this.handlePageEvent(this.paginator);
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
  getPokemons() {
    this.pokemonService.getAllPokemons(this.limit).subscribe((list) => {
      this.pokemonsNames = list.results;
      this.dataSource = new MatTableDataSource(this.pokemonsNames);
      this.updatePaginator();
    });
  }
  showMorePokemons(): void {
    this.limit = this.limit + 100;
    console.log(this.limit);
    this.pokemonService.getAllPokemons(this.limit).subscribe((list) => {
      list.results.forEach((pokemon: IEntityModel) => {
        const exists = this.pokemonsNames.some(
          (existingPokemon: IEntityModel) => {
            return existingPokemon.name === pokemon.name;
          }
        );
        if (!exists) {
          this.pokemonsNames.push(pokemon);
          this.updatePaginator()
        }
      });
    });
  }
  trackByFn(index: number) {
    return index;
  }
  detail_pokemon(name: String) {
    this.router.navigate([`pokedesk/pokemon/${name}`]);
  }
  searchPokemon(namePokemon: string) {
    this.search.setValue(namePokemon);
    if (this.search.value == '') this.getPokemons();
    else {
      this.pokemonsNames = [];
      try {
        this.pokemonService
          .getSearchPokemon(this.search.value ?? '')
          .subscribe((pokemon) => {
            this.pokemonsNames.push({
              name: pokemon.name,
              url: pokemon.sprites.front_default,
            });
          });
      } catch (e) {
        console.log('error', e);
      }
      this.search.setValue('');
    }
  }
}
