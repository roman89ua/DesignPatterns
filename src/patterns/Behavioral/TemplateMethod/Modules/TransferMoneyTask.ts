import type { AuditTrail } from "./AuditTrail";
import {Task} from "./Task";

export class TransferMoneyTask extends Task{
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
    console.log("Transfer money!!!");
  }
}
