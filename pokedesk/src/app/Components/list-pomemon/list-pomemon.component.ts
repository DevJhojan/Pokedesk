import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, map } from 'rxjs';
import { IPokemonModel } from 'src/Models/pokemon.model';
import { PokedeskService } from 'src/app/Service/pokedesk.service';
const pokemon_count = 100;
@Component({
  selector: 'app-list-pomemon',
  templateUrl: './list-pomemon.component.html',
  styleUrls: ['./list-pomemon.component.scss'],
})
export class ListPomemonComponent implements OnInit {
  pokemons: IPokemonModel[] = [];
  pokenShow: IPokemonModel[] = [];
  name!: string;
  searchGroup!: FormGroup;
  constructor(private poken: PokedeskService, private router: Router) {
    this.getPokemons();
  }

  ngOnInit(): void {

  }

  searchPokemons(e: Event) {
    setTimeout(()=>{
      const filtro = (e.target as HTMLInputElement).value;
      if(filtro.length === 0){
        this.getPokemons();
      }else{
        let pokemons: IPokemonModel[] = this.pokenShow.filter((pokemon)=> pokemon.name.toLowerCase().includes(filtro.toLowerCase()));
        this.pokenShow = []
        this.pokenShow= pokemons;
        console.log(this.pokenShow)
      }
  },500)
  }

  getPokemons() {
    this.pokemons = [];
    this.pokenShow = [];
    for (let i = 1; i <= pokemon_count; i++) {
      this.poken.getPokemon(i).subscribe((data: IPokemonModel) => {
        this.pokemons.push(data);
      });
    }
    this.pokenShow = this.pokemons;

  }

  detailPokemon(index: number) {
    this.router.navigate([`/home/pokemonDetail/${index}`]);
  }
}
