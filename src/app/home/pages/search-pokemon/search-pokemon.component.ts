import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IEntityModel, IPokemonModel } from '@models/*';
import { PokemonService } from '@services/*';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  pokemonsNames: IEntityModel[] = [];
  allPokemons: IEntityModel[] = [];
  searchGroup: FormGroup;
  selector = '.main-panel';
  search = new FormControl<string>('');
  limit: number = 100;
  constructor(private pokemonService: PokemonService, private router: Router) {
    this.getPokemons();
    this.allPokemons = this.pokemonsNames;
    this.searchGroup = new FormGroup({
      searchInput: new FormControl<String>(''),
    });
  }
  ngOnInit(): void {}
  getPokemons() {
    this.pokemonService.getAllPokemons(this.limit).subscribe((list) => {
      this.pokemonsNames = list.results;
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
