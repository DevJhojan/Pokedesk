import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAbilitiesModel } from 'src/app/Models/i-abilitie.model';
import { IStatModel } from 'src/app/Models/i-stats.model';
import { IPokemonModel } from 'src/app/Models/pokemon.model';
import { PokedeskService } from 'src/app/Service/pokedesk.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  name!: string;
  id!: number;
  img!: string;
  abilities: IAbilitiesModel[] = [];
  experience!: number;
  stats: IStatModel[] = [];

  constructor(
    private activeRouter: ActivatedRoute,
    private pokeServi:PokedeskService
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.id = parseInt(params['pokemonId']);

      this.pokeServi.getPokemon(this.id).subscribe((pokemon: IPokemonModel) => {
        this.name = pokemon.name;
        this.img = pokemon.sprites.other.dream_world.front_default;
        this.abilities = pokemon.abilities;
        this.experience = pokemon.base_experience;
        this.stats = pokemon.stats;
      });
    });
  }

  

}
