import { IPokemonModel } from './../../../Models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonService } from 'src/app/Service';
import { colorSheme } from 'src/app/fuctions';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [],
})
export class PokemonDetailComponent {
  name!: string;
  pokemon?:IPokemonModel;
  view: [number,number] = [500,400]
  colors: any;
  abilities_pokemon: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.colors = colorSheme
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') ?? '';
    });
    this.pokemonService.getPokemon(this.name)
    .subscribe((pokemon)=>{
        this.pokemon = pokemon;
        this.abilities_pokemon = pokemon.abilities
      }
    );
  }
  onSelect($event: any){

  }
}
