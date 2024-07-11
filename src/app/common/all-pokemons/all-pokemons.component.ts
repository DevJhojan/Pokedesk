import { Component } from '@angular/core';
import { IPokemonModel } from 'src/app/Models';
import { IResource } from 'src/app/Models/i-resource.model';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'common-all-pokemons',
  standalone: false,
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
export class AllPokemonsComponent {
  AllPokemons!: IPokemonModel[]
  constructor(private _pokeApiService: PokeApiService){
    this._pokeApiService.getAllPokemon()
    .subscribe((resource:IResource)=>{
        this.AllPokemons = resource.results
    })
  }
  x (){
    for(let pokedex of this.AllPokemons){
      console.log("hola",pokedex)
    }
  }
}
