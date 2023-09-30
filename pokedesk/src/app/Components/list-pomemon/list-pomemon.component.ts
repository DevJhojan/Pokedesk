import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, map } from 'rxjs';
import { PokedeskService } from 'src/app/Service/pokedesk.service';
const pokemon_count = 1281;
@Component({
  selector: 'app-list-pomemon',
  templateUrl: './list-pomemon.component.html',
  styleUrls: ['./list-pomemon.component.scss'],
})
export class ListPomemonComponent implements OnInit {
  pokemons: any[] = [];
  pokenShow: any[] = [];
  name!: string;
  searchGroup!: FormGroup;
  constructor(private poken: PokedeskService, private router: Router) {
    this.getPokemons();

  }

  ngOnInit(): void {
    this.searchGroup = new FormGroup({
      searchInput: new FormControl('')
    });
    /* this.getPokemons(); */

    this.searchPokemons();
  }

  searchPokemons() {

    try {
      this.searchGroup.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(querry=>{
        this.pokemons = [];
        if(querry.searchInput == ''){
          this.getPokemons();
        }else{
          this.pokenShow = [];
          this.poken.getSearchPokemon(querry.searchInput)
          .subscribe((data:any)=>{
            this.pokenShow.push(data);
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
    /* this.name = this.searchGroup.value;

    this.poken.getSearchPokemon(this.name).subscribe(); */


  }

  getPokemons() {
    for (let i = 1; i <= pokemon_count; i++) {
      this.poken.getPokemon(i).subscribe((data: any) => {
        this.pokemons.push(data);
        console.log(data);
      });
    }
    this.pokenShow = this.pokemons;

  }
  detailPokemon(index: number) {
    this.router.navigate([`/home/pokemonDetail/${index}`]);
  }
}
