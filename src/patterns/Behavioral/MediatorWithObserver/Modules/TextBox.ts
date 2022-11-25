import {UIControl} from "./UIControl";

export class TextBox  extends UIControl{
  private _content: string = '';
  
  get content(): string {
    return this._content;
  }
  
  set content(value: string) {
    this._content = value;
    this.notifyObservers();
  }
}
