import { AfterViewInit, Component} from '@angular/core';
import { EntityModel, IEntityModel } from 'src/app/Models/i-entity.model';
import { PokemonService } from 'src/app/Service';
import { ExportDataFile, ImportExcel } from 'src/app/fuctions';
import { IColumns } from 'src/app/fuctions/interfaces/i-columns.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent implements AfterViewInit {
  pokemons_names!: IEntityModel[];
  pokemons_import: EntityModel[] = [];
  row_data: any[] = [];
  pokemon_select_file!: EntityModel;
  file_pokemon: any;
  importExcel: ImportExcel = new ImportExcel();
  exportDataFile: ExportDataFile = new ExportDataFile();
  columns: IColumns[] = [
    { column: 'A', width: 10 },
    { column: 'B', width: 50 },
  ];

  pok: number= 0;

  header_names: string[] = ['NAMES', 'URLS'];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {
    this.pokemonService.getAllPokemons().subscribe((list) => {
      this.pokemons_names = list.results;
    });
  }
  downLoad(): void {
    /* this.downloadService.downloadExcel(this.pokemons_names); */
    this.exportDataFile.downloadFile(
      this.pokemons_names,
      this.columns,
      this.header_names,
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

  detail_pokemon(name: string){
    this.router.navigate([`pokedesk/pokemon/${name}`])
  }
}
