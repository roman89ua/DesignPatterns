import {UIControl} from "./UIControl";
import type {DialogBox} from "./DialogBox";

export class TextBox  extends UIControl{
  private _content: string = '';
  
  constructor(owner: DialogBox) {
    super(owner);
  }
  get content(): string {
    return this._content;
  }
  
  set content(value: string) {
    this._content = value;
    this.owner.changed(this);
  }
}
