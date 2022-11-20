import {CustomerService} from "./Modules/CustomerService/CustomerService";
import {AddCustomerCommand} from "./Modules/CustomerService/AddCustomerCommand";
import {Button} from "./Modules/Framework/Button";
import {RemoveCustomerCommand} from "./Modules/CustomerService/RemoveCustomerCommand";

export class Command {
  constructor() {
    console.log("Command Pattern");
    // Button
    // CheckBox
    // TextBox
    const serviceObj = new CustomerService();
    const addCommand = new AddCustomerCommand(serviceObj);
    const button1 = new Button(addCommand);
    button1.setLabel("Add customer").click();
    const removeCommand = new RemoveCustomerCommand(serviceObj)
    const button2 = new Button(removeCommand);
    button2.setLabel("Remove Customer").click();
  }
}
