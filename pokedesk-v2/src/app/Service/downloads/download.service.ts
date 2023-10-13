import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { IEntityModel } from 'src/app/Models/i-entity.model';
import * as fs from 'file-saver'
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private _workbook!: Workbook;

  constructor(private http: HttpClient) { }

  downloadExcel(data_simple: IEntityModel[]): void {
    this._workbook = new Workbook();

    this._workbook.creator='pokemon';

    this._workbook.xlsx.writeBuffer()
    .then((data:any)=>{
      const blob = new Blob([data]);
      fs.saveAs(blob, 'pokemons.xlsx');
    })
  }



}
