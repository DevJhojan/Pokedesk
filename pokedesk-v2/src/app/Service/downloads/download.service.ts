import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { IEntityModel } from 'src/app/Models/i-entity.model';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private _workbook!: Workbook;

  constructor(private http: HttpClient) {}

  downloadExcel(data_simple: IEntityModel[]): void {
    this._workbook = new Workbook();

    this._workbook.creator = 'pokemon';

    this._createPokemonTable(data_simple);
    this._workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data]);
      fs.saveAs(blob, 'pokemons.xlsx');
    });
  }

  private _createPokemonTable(data_table: IEntityModel[]): void {
    const pokemons_paper = this._workbook.addWorksheet('pokemones');

    pokemons_paper.getColumn("A").width = 20;
    pokemons_paper.getColumn("B").width = 50;

    pokemons_paper.columns.forEach((column)=>{
      column.alignment = {vertical: 'middle', wrapText: true}
    })

    //* Agregación de titulos
/*
    const title_one = pokemons_paper.getCell('A1');
    const title_two = pokemons_paper.getCell('B1');

    title_one.value = 'NAME';
    title_two.value = 'URL';
    title_one.style.font = {bold: true}
    title_two.style.font = {bold: true} */

    const header_row = pokemons_paper.getRow(1);
    header_row.values = ['Name','URL']
    header_row.font = {bold:true, size:14}

    const rows_datas = pokemons_paper.getRows(2,  data_table.length)!;

    for(let index = 0; index < rows_datas.length;index++){
      const item = data_table[index];
      const row = rows_datas[index]

      row.values=[
        item.name,
        item.url,
      ]
    }



  }
}
