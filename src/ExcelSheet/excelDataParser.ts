import * as ExcelJS from 'exceljs';

export class DataParser {
  static parseData(worksheet: ExcelJS.Worksheet): object[] {
    const clients = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) {
        return;
      }

      const client = {
        Client: row.getCell(1).value,
        Street: row.getCell(2).value,
        Sector: row.getCell(3).value,
        Pin: row.getCell(4).value,
      };

      clients.push(client);
    });

    return clients;
  }
}
