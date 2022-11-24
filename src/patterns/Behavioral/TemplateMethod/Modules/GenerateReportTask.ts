// import type {AuditTrail} from "./AuditTrail";
import {Task} from "./Task";

export class GenerateReportTask extends Task{
  // auditTrail: AuditTrail;
  //
  // constructor(auditTrail: AuditTrail) {
  //   this.auditTrail = auditTrail;
  // }
  
  // execute() {
  //   this.auditTrail.record();
  //   console.log("Transfer money!!!");
  // }
  protected doExecute(): void {
    console.log("Generate report !!!")
  }
}
