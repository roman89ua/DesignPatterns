import {DialogBox} from "./DialogBox";
import type {UIControl} from "./UIControl";
import {ListBox} from "./ListBox";
import {Button} from "./Button";
import {TextBox} from "./TextBox";

export class ItemsDialogBox extends DialogBox{
  private listBox: ListBox = new ListBox(this);
  private  textBox: TextBox = new TextBox(this);
  private button: Button = new Button(this);
  
  changed(control: UIControl): void {
    if(control === this.listBox) this.onListBoxItemSelect();
    if(control === this.textBox ) this.onTextBoxContentChanged();
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
