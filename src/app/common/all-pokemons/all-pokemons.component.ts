import { Component } from '@angular/core';
import { IEntityModel, IPokemonModel } from 'src/app/Models';
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
  allPokemonsEntity!: IEntityModel[]
  allPokemonsModel!: IPokemonModel[]
  constructor(private _pokeApiService: PokeApiService){
    this.getPokemonEntity().forEach(pokemonEntity =>{
      this._pokeApiService.getOnePokemon(pokemonEntity.name)
      .subscribe(pokemonModel =>this.allPokemonsModel.push(pokemonModel));
    })
  }

  getPokemonEntity():IEntityModel[]{
    this._pokeApiService.getAllPokemon()
    .subscribe((resource:IResource)=>{
      return this.allPokemonsEntity = resource.results;
    })
    return this.allPokemonsEntity;
  }

}
