import { Controller, Get } from '@nestjs/common';
import { ExcelService } from './excel.service';

@Controller('api')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('populatesheet')
  async populateSheet(): Promise<any> {
    const data = await this.excelService.getData();
    return data;
  }
}
