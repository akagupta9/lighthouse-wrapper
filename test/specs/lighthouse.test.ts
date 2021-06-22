import { expect as chaiExpect } from "chai";
import allureReporter from "@wdio/allure-reporter";
import { ExcelReader } from "../../utils/excelReader";

describe("Performance Testing Using LightHouse", () => {
  before(async () => {
    await browser.enablePerformanceAudits();
  });

  it("Lighthouse Report check for URL", async () => {
    console.log("Testing");
    await new ExcelReader().getExcelContent();
  });
});
