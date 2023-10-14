import { Workbook } from 'exceljs';
import { IHeader } from '../interfaces/i-headers.interface';
import * as fs from 'file-saver';
export class ExportDataFile {
  private _workbook: Workbook = new Workbook();

  public downloadFile(
    data_table: any[],
    headers: IHeader[],
    name_file?: string,
    number_paper?: number
  ): void {

    this._workbook.creator='meta_data: '

    if(number_paper){
      this.createTabel(data_table,headers, number_paper)
    }else{
      this.createTabel(data_table,headers)
    }

    if(name_file && name_file != ''){
      this._workbook.xlsx.writeBuffer()
      .then((file)=>{
        const blob = new Blob([file])
        fs.saveAs(blob, name_file)
      })
    }else{
      this._workbook.xlsx.writeBuffer()
      .then((file)=>{
        const blob = new Blob([file])
        fs.saveAs(blob, 'default.xlsx')
      })
    }

  }

  //*El headers solo acepta un alfaveto de la A a la Z y en mayusculas
  private createTabel(
    data_table: any[],
    headers: IHeader[],
    number_paper?: number
  ): void {
    let paper: any;
    let sheet: string;
    if (number_paper) {
      for (let i = 0; i < number_paper; i++) {
        sheet = 'Hoja ' + i;
        paper = this._workbook.addWorksheet(sheet);
      }
    } else {
      paper = this._workbook.addWorksheet('Hoja 1');
    }
    headers.forEach((header) => {
      paper.getColumn(header.column).width = header.width;
    });
    paper.columns.forEach((column: any) => {
      column.alignment = { vertical: 'middle', wrapText: true };
    });
    const header_row = paper.getRow(1);
    headers.forEach((header: IHeader) => {
      header_row.values.push(header.column);
    });
    header_row.font = { bold: true, size: 12 };

    const data_rows = paper.getRows(2, data_table.length)!;

    for (let i = 0; i < data_rows.length; i++) {
      const items = data_table[i];
      const row = data_rows[i];
      row.values = [...items];
    }
  }
}
