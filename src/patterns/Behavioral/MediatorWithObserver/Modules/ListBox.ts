import {UIControl} from "./UIControl";

export class ListBox  extends UIControl{
  _selection: string ;
  
  constructor() {
    super();
    this._selection = '';
  }
  
  getSelection(): string {
    return this._selection;
  }
  
  setSelection(value: string) {
    this._selection = value;
    this.notifyObservers();
  }
}
