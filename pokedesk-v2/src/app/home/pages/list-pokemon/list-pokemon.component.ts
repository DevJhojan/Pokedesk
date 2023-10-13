import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IEntityModel } from 'src/app/Models/i-entity.model';
import { DownloadService, PokemonService } from 'src/app/Service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent implements AfterViewInit {
  pokemons_names!: IEntityModel[];
  colums: string[] = ['name', 'url'];
  constructor(
    private pokemonService: PokemonService,
    private downloadService: DownloadService
  ) {
    this.pokemonService.getAllPokemons().subscribe((list) => {
      console.log(list);
      this.pokemons_names = list.results;
    });
    console.log(this.pokemons_names);
  }
  downLoad(): void {
    this.downloadService.downloadExcel(this.pokemons_names);
  }
  ngAfterViewInit(): void {}
}
