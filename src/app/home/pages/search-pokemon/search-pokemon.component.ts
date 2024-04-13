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
  searchGroup: FormGroup;
  search = new FormControl<string>('');
  constructor(private pokemonService: PokemonService, private router: Router) {
    this.getPokemons();
    this.searchGroup = new FormGroup({
      searchInput: new FormControl<String>(''),
    });
  }
  ngOnInit(): void {}
  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((list) => {
      this.pokemonsNames = list.results;
    });
  }
  detail_pokemon(name: String) {
    this.router.navigate([`pokedesk/pokemon/${name}`]);
  }
  searchPokemon(namePokemon: string) {
    this.search.setValue(namePokemon);
    if (this.search.value == '') this.getPokemons();
    else {
      this.pokemonsNames = [];
      try{
        this.pokemonService
          .getSearchPokemon(this.search.value ?? '')
          .subscribe((pokemon) => {
            this.pokemonsNames.push({
              name: pokemon.name,
              url: pokemon.sprites.front_default,
            });
          });
      }catch(e){
        console.log("error", e)
      };
      this.search.setValue('');
    }
  }
}
