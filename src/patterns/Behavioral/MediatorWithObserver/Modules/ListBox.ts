import {UIControl} from "./UIControl";

export class ListBox  extends UIControl{
  protected readonly _listOfSelection: string[] = [];
  private _selection: string = '';
  
  
  getSelectionByIndex(index: number): string {
    return this._listOfSelection[index] || "";
  }
  
  get selection(): string {
    return this._selection;
  }
  
  set selection(value: string) {
    this._selection = value;
    this.notifyObservers();
  
  }
}
