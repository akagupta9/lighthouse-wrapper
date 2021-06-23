import { join } from "path";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { launch } from "chrome-launcher";
import dataContent from "../resources/data.json";
import lighthouse from "lighthouse";

export class LightHouseWrapper {
  private currentDateTime = new Date().getTime();
  private resourceFilePath = join(process.cwd(), "./resources/data.json");
  private reportFolder = join(process.cwd(), `Reports/${this.currentDateTime}`);
  private chrome: any;

  async auditSite(): Promise<void> {
    await this.makeReportDirectory();
    let urls = await this.getUrls();
    await this.setChrome();
    let options = await this.getBrowserConfig();
    await this.triggerLightHouseAuditAndGetResults(urls, options);
    await this.killChrome();
    // console.log(
    //   "Performance score was",
    //   runnerResult.lhr.categories.performance.score * 100
    // );
  }

  async triggerLightHouseAuditAndGetResults(
    urls: {}[],
    options: any
  ): Promise<void> {
    for (let index = 0; index < urls.length; index++) {
      let runnerResult = await lighthouse(urls[index]["url"], options);
      let reportHtml = await runnerResult.report;
      await writeFileSync(
        `${this.reportFolder}/${urls[index]["pageName"].trim()}.html`,
        reportHtml
      );
    }
  }

  async getUrls(): Promise<{}[]> {
    return dataContent.APP_NAME;
  }

  async makeReportDirectory(): Promise<void> {
    try {
      if (!(await existsSync(`${this.reportFolder}`))) {
        await mkdirSync(`${this.reportFolder}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async setChrome(): Promise<void> {
    this.chrome = await launch({ chromeFlags: ["--headless"] });
  }

  async killChrome(): Promise<void> {
    await this.chrome.kill();
  }

  async getBrowserConfig(): Promise<any> {
    const options = {
      logLevel: "silent",
      output: "html",
      port: this.chrome.port,
    };
    return options;
  }
}
