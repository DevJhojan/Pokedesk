import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  abilities: any[] = [];
  experience!: number;
  stats: any[] = [];

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private pokeServi:PokedeskService
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.id = parseInt(params['pokemonId']);

      this.pokeServi.getPokemon(this.id).subscribe((data: any) => {
        this.name = data.name;
        this.img = data.sprites.other.dream_world.front_default;
        this.abilities = data.abilities;
        this.experience = data.base_experience;
        this.stats = data.stats;
      });
    });
  }

}
