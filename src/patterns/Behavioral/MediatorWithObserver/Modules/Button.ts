import {UIControl} from "./UIControl";

export class Button extends UIControl{
  private _isEnabled: boolean = true;
  
  get isEnabled(): boolean {
    return this._isEnabled;
  }
  
  set isEnabled(value: boolean) {
    this._isEnabled = value;
    this.notifyObservers();
  }
}
