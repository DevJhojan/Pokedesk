import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/Models/pokemon.model';
import { PokemonService } from 'src/app/Service/pokemon.service';

const pokemon_count = 500;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  name: string;
  constructor(private poken: PokemonService) {}

  ngOnInit(): void {
    for (let i = 1; i <= pokemon_count; i++) {
      this.poken.getPokemon(i).subscribe((data: any) => {
        this.pokemons.push(data);
      });
    }
  }
}
