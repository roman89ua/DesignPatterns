import {UIControl} from "./UIControl";
import type {DialogBox} from "./DialogBox";

export class Button extends UIControl{
  private _isEnabled: boolean = true;
  
  constructor(owner: DialogBox) {
    super(owner);
  }
  
  
  get isEnabled(): boolean {
    return this._isEnabled;
  }
  
  set isEnabled(value: boolean) {
    this._isEnabled = value;
    this.owner.changed(this);
  }
}
