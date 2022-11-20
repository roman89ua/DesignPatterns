import type {ICommand} from "../Framework/ICommand";
import type {CustomerService} from "./CustomerService";

export class AddCustomerCommand implements ICommand{
  private service: CustomerService;
  
  constructor(customerService: CustomerService) {
    this.service = customerService;
  }
  
  execute(): void {
    this.service.addCustomer();
  }
}
