import { IPokemonModel } from 'src/app/Models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonService } from 'src/app/Service';
import { colorSheme } from 'src/app/fuctions';

interface ICake {
  name: string;
  value: number;
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [],
})
export class PokemonDetailComponent {
  name!: string;
  pokemon?: IPokemonModel;
  view: [number, number] = [500, 400];
  colors: any;
  stats_pokemon: ICake[] = [];
  stats: any[] = [];
  // customColors: any[] = [
  //   {
  //     name: 'hp',
  //     value: '#ffffff',
  //   },
  // ];

  color: any = 'white';
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.colors = colorSheme;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') ?? '';
    });
    this.pokemonService.getPokemon(this.name).subscribe((pokemon) => {
      pokemon.stats.forEach((stat) => {
        let name = stat.stat.name;
        let value = stat.base_stat;
        this.stats_pokemon.push({ name, value });
      });
      this.stats = this.stats_pokemon;
      this.pokemon = pokemon;
    });
  }

  onSelect($event: any) {}
}
