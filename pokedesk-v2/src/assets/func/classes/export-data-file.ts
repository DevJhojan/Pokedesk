import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
import { IColumns } from '../interfaces/i-columns.interface';

export class ExportDataFile {
  private _workbook: Workbook = new Workbook();
  constructor() {}
  public downloadFile(
    data_table: any[],
    columns: IColumns[],
    header_names: string[],
    name_file?: string,
    number_paper?: number
  ): void {
    this._workbook.creator = 'meta_data: ';
    this.createTabel(data_table, columns, header_names, number_paper = 1);

    if (name_file && name_file != '') {
      this._workbook.xlsx.writeBuffer().then((file) => {
        const blob = new Blob([file]);
        fs.saveAs(blob, name_file);
      });
    } else {
      this._workbook.xlsx.writeBuffer().then((file) => {
        const blob = new Blob([file]);
        fs.saveAs(blob, 'default.xlsx');
      });
    }
  }

  //*El headers solo acepta un alfaveto de la A a la Z y en mayusculas

  private createTabel(
    data_table: any[],
    columns: IColumns[],
    header_names: string[],
    number_paper?: number
  ): void {
    let paper: any;
    let sheet: string;
    if (number_paper) {
      for (let i = 0; i < number_paper; i++) {
        sheet = 'Hoja ' + i;
        paper = this._workbook.addWorksheet(sheet);
        //** EL HEADER.COLUM SOLO RECIBE LETRAS EN MAYUSCULAS */
        columns.forEach((header) => {
          paper.getColumn(header.column).width = header.width;
        });
        paper.columns.forEach((column: any) => {
          column.alignment = { vertical: 'middle', wrapText: true };
        });
        const header_row = paper.getRow(1);

        header_row.values = header_names;

        header_row.font = { bold: true, size: 12 };

        const data_rows = paper.getRows(2, data_table.length)!;

        for (let i = 0; i < data_rows.length; i++) {
          const item = data_table[i];
          const row = data_rows[i];
          row.values = [item.name, item.url];
        }
      }
      sheet = ""
    }

  }
}
