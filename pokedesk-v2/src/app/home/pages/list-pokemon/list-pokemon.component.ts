import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EntityModel, IEntityModel } from 'src/app/Models/i-entity.model';
import { PokemonService } from 'src/app/Service';
import { IColumns,ExportDataFile, ImportExcel } from '@func/*';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent implements OnInit, AfterViewInit {
  pokemonsNames: IEntityModel[] = [];
  pokemonSource: any; //?muestra los pokemons en la tabla //!se deja en any para posible actualización de angualar
  pokemons_import: EntityModel[] = [];
  row_data: any[] = [];
  pokemon_select_file!: EntityModel;
  file_pokemon: any;
  importExcel: ImportExcel = new ImportExcel();
  exportDataFile: ExportDataFile = new ExportDataFile();
  rowHeight: number = 50;

  columns: IColumns[] = [
    { column: 'A', width: 10 },
    { column: 'B', width: 50 },
  ];
  viewport!: CdkVirtualScrollViewport

  headerNames: string[] = ['NAME', 'Detail'];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {
    this.getPokemons();
  }
  ngOnInit(): void {
    this.viewport.scrollToIndex(this.pokemonSource /2)
  }
  getPokemons() {
    setTimeout(() => {
      this.pokemonService.getAllPokemons().subscribe((list) => {
        this.pokemonsNames = list.results;
        this.pokemonSource = new MatTableDataSource(list.results);
      });
    }, 200);
  }
  downLoad(): void {
    /* this.downloadService.downloadExcel(this.pokemons_names); */
    this.exportDataFile.downloadFile(
      this.pokemonsNames,
      this.columns,
      this.headerNames,
      'pokemons.xlsx'
    );
  }
  ngAfterViewInit(): void {}

  async selectFile($event: any) {
    let arrays_promise = this.importExcel.file_selected($event);

    let data_rows = await arrays_promise;

    let name: string;
    let url: string;
    data_rows.map((cell) => {
      if (cell.address.includes('A')) {
        name = cell.value;
      }
      if (cell.address.includes('B')) {
        url = cell.value;
      }
      if (name && url) {
        this.pokemon_select_file = new EntityModel(name, url);
        this.pokemons_import.push(this.pokemon_select_file);
        url = '';
      }
    });
  }
  buscarPokemon($event: Event) {
    const filter = ($event.target as HTMLInputElement).value;
    this.pokemonSource.filter = filter.trim().toLowerCase();
  }
  detail_pokemon(name: string) {
    this.router.navigate([`pokedesk/pokemon/${name}`]);
  }
}
