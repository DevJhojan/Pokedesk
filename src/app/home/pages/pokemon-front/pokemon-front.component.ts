import { Component, Input, OnInit } from '@angular/core';
import { colorSheme } from '@func/*';
import { IPokemonModel } from '@models/*';
import { PokemonService } from '@services/*';

interface ICake {
  name: string;
  value: number;
}
@Component({
  selector: 'app-pokemon-front',
  template: `
    <img
      [src]="pokemon?.sprites?.other.dream_world.front_default"
      [alt]="pokemon?.name"
      class="img-list"
    />
  `,
  styles: [],
})
export class PokemonFrontComponent implements OnInit {
  @Input() namePokemon!: string;
  pokemon?: IPokemonModel;
  view: [number, number] = [500, 400];
  colors: any;
  stats_pokemon: ICake[] = [];
  stats: any[] = [];

  constructor(private pokemonService: PokemonService) {
    this.colors = colorSheme;
    // this.pokemonService.getPokemon(this.namePokemon).subscribe((pokemonDetail) => {
    //   pokemonDetail.stats.forEach((stat) => {
    //     let name = stat.stat.name;
    //     let value = stat.base_stat;
    //     this.stats_pokemon.push({ name, value });
    //   });
    //   this.stats = this.stats_pokemon;
    //   this.pokemon = pokemonDetail;
    // });
  }
  onSelect($event: any) {}
  ngOnInit(): void {
    this.pokemonService
      .getPokemon(this.namePokemon)
      .subscribe((pokemonDetail) => {
        pokemonDetail.stats.forEach((stat) => {
          let name = stat.stat.name;
          let value = stat.base_stat;
          this.stats_pokemon.push({ name, value });
        });
        this.stats = this.stats_pokemon;
        this.pokemon = pokemonDetail;
      });
  }
}
