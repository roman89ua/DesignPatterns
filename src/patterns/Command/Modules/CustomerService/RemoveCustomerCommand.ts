import type {ICommand} from "../Framework/ICommand";
import type {CustomerService} from "./CustomerService";

export class RemoveCustomerCommand implements ICommand {
  private service: CustomerService;
  constructor(service: CustomerService) {
    this.service = service;
  }
  execute(): void {
    this.service.removeCustomer();
  }
}
