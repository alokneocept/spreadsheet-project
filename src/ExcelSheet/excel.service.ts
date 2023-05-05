import * as ExcelJS from 'exceljs';
import { ExcelReader } from './excelReader';
import { DataParser } from './excelDataParser';

export class ExcelService {
  async getData(): Promise<any> {
    const excelReader = new ExcelReader();
    const workbook = await excelReader.readExcel();

    const cities = workbook.worksheets;
    const data = {};

    for (const city of cities) {
      const worksheet = workbook.getWorksheet(city.name);
      const clients = DataParser.parseData(worksheet);

      data[city.name] = clients;
    }

    return data;
  }
}
