import type {UIControl} from "./UIControl";
import {ListBox} from "./ListBox";
import {Button} from "./Button";
import {TextBox} from "./TextBox";
import {Observer} from "./Observer/Observer";

export class ItemsDialogBox {
  private listBox: ListBox = new ListBox();
  private  textBox: TextBox = new TextBox();
  private button: Button = new Button();
  constructor() {
    this.listBox.attach(new Observer (this.onListBoxItemSelect));
    this.textBox.attach(new Observer (this.onTextBoxContentChanged));
  }
  simulateUsersInteraction() {
    this.listBox.selection = "selected item 1";
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
    this.textBox.content = this.listBox.selection;
    this.onTextBoxContentChanged();
  }
  
  private onTextBoxContentChanged () {
    const isEmpty = !this.textBox.content;
    this.button.isEnabled = !isEmpty;
  }
}
