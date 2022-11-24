import {TransferMoneyTask} from "./Modules/TransferMoneyTask";
import {GenerateReportTask} from "./Modules/GenerateReportTask";

export class TemplateMethod {
  constructor() {
    console.log("Template method");
    const transferTask = new TransferMoneyTask()
    transferTask.execute();
    const generateReportTask = new GenerateReportTask();
    generateReportTask.execute();
  }
}

