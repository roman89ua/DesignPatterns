import {ListBox} from "./ListBox";
import {Button} from "./Button";
import {TextBox} from "./TextBox";
import {Observer} from "./Observer/Observer";

export class ItemsDialogBox {
  private listBox: ListBox ;
  private textBox: TextBox;
  private button: Button;
  
  constructor() {
    this.listBox = new ListBox();
    this.textBox = new TextBox();
    this.button = new Button();
    this.listBox.attach(new Observer (()=>this.onListBoxItemSelect()));
    this.textBox.attach(new Observer (()=>this.onTextBoxContentChanged()));
  }
  
  simulateUsersInteraction() {
    this.listBox.setSelection("selected item 1");
    console.log("Text box content: ", this.textBox.content);
    console.log("Button is enabled: ", this.button.isEnabled);
    this.textBox.content = "";
    console.log("Text box content: ", this.textBox.content);
    console.log("Button is enabled: ", this.button.isEnabled);
    this.textBox.content = "123";
    console.log("Text box content: ", this.textBox.content);
    console.log("Button is enabled: ", this.button.isEnabled);
    this.textBox.content = "qeqeqe121eqeqwe";
    console.log("Text box content: ", this.textBox.content);
    console.log("Button is enabled: ", this.button.isEnabled);
  }
  
  private onListBoxItemSelect () {
    this.textBox.content = this.listBox.getSelection();
    this.onTextBoxContentChanged();
  }
  
  private onTextBoxContentChanged () {
    const isEmpty = !this.textBox.content;
    this.button.isEnabled = !isEmpty;
  }
}
