import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';

interface IExcelData {
  value: any;
  address: string;
}
class ExcelData implements IExcelData {
  value: any;
  address: string;
  constructor(value: any, address: string) {
    this.value = value;
    this.address = address;
  }
}
/* @Injectable({
  providedIn: 'root'
}) */
export class ImportExcel {
  private file: any;
  private data_rows: IExcelData[] = [];
  private uint8Array!: Uint8Array;
  private blob!: Blob;
  private workbook: Workbook = new Workbook();
  private reader: FileReader = new FileReader();
  private arrayBuffer: ArrayBuffer | null = null;

  constructor() {}

  public async file_selected($event: any):Promise<any[]> {
    return new Promise((resolve,reject)=>{

      this.file = $event.target.files[0];
      if (!this.file) {
        return;
      }
      this.reader.onload = async (e) => {
        this.arrayBuffer = e.target?.result as ArrayBuffer | null;

        if (this.arrayBuffer) {
          this.uint8Array = new Uint8Array(this.arrayBuffer);
          this.blob = new Blob([this.uint8Array], {
            type: 'application/octet-stream',
          });

          const arrayBuffer2 = await this.blob.arrayBuffer();
          await this.workbook.xlsx.load(arrayBuffer2);

          const worksheet = this.workbook.getWorksheet(1);

          worksheet.eachRow((row: any, row_number: any): any => {
            if (row_number !== 1) {
              const rows: any[] = [];
              row.eachCell((cell: any) => {
                let value: any;
                let address: string;
                console.log(cell._value.model.value);
                console.log(cell._address);
                value = cell._value.model.value;
                address = cell._address;
                rows.push({ value, address });
              });
              this.data_rows.push(...rows);
              resolve(this.data_rows);
            }
          });
        }
      };
      this.reader.readAsArrayBuffer(this.file);
    })
  }

  public arrays(arrays: ExcelData[]): IExcelData[]{
    return arrays;
  }
}
