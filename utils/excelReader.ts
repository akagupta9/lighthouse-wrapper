import { join } from "path";
import { readFile, utils } from "xlsx";
export class ExcelReader {
  private excelFilePath = join(process.cwd(), "./test/resources/urls.xlsx");

  async getExcelContent(): Promise<void> {
    const file = await readFile(this.excelFilePath);
   // await utils.sheet_add_json(file.SheetNames);
  }
}
