import * as ExcelJS from 'exceljs';

export class ExcelReader {
  FILEPATH = './data/clientAddress.xlsx';

  async readExcel(): Promise<ExcelJS.Workbook> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(this.FILEPATH);

    return workbook;
  }
}
