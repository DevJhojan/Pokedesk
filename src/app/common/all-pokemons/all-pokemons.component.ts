import { Component } from '@angular/core';
import { IEntityModel, IPokemonModel } from 'src/app/Models';
import { IResource } from 'src/app/Models/i-resource.model';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'common-all-pokemons',
  standalone: false,
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent {
  allPokemonsEntity: IEntityModel[] = [];
  allPokemonsModel: IPokemonModel[] = [];
  public paginatedPokemons: IPokemonModel[] = [];
  public filteredPokemons: IPokemonModel[] = [];

  public searchText: string = '';
  public currentPage: number = 1; // Página inicial
  public pageSize: number = 6; // Cantidad de Pokémon por página
  public totalPages: number = 1;
  constructor(private _pokeApiService: PokeApiService) {
    this.getPokemonEntity();
  }

  getPokemonEntity(): void {
    this._pokeApiService.getAllPokemon().subscribe((resource: IResource) => {
      this.allPokemonsEntity = resource.results;
      for (let pokemonEntity of this.allPokemonsEntity) {
        this._pokeApiService
          .getOnePokemon(pokemonEntity.name)
          .subscribe((pokemonModel) => {
            this.allPokemonsModel.push(pokemonModel);
            this.allPokemonsModel.sort((a, b) => a.id - b.id);
            this.totalPages = Math.ceil(
              this.allPokemonsModel.length / this.pageSize
            );
            this.filterPokemons();
          });
      }
    });
  }

  filterPokemons(): void {
    console.log(this.allPokemonsModel)
    if (this.searchText) {
      const searchLower = this.searchText.toLowerCase();
      this.filteredPokemons = this.allPokemonsModel.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchLower)
      );
    } else {
      this.filteredPokemons = [...this.allPokemonsModel];
    }

    this.totalPages = Math.ceil(this.filteredPokemons.length / this.pageSize);
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPokemons = this.filteredPokemons.slice(startIndex, endIndex);
  }

  // Función para ir a la página anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

  // Función para ir a la página siguiente
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }
  goToFirstPage(): void {
    this.loadPage(1);
  }

  // Función para ir a la última página
  goToLastPage(): void {
    this.loadPage(this.totalPages);
  }
}
