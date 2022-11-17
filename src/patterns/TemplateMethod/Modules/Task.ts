import {AuditTrail} from "./AuditTrail";

export abstract class Task {
  private auditTrail: AuditTrail;
  
  constructor(auditTrail?: AuditTrail) {
    this.auditTrail= auditTrail || new AuditTrail();
  }
  
  execute() {
    this.auditTrail.record();
    this.doExecute()
  }
  
  protected abstract doExecute(): void;
}
