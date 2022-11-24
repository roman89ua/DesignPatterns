import {UIControl} from "./UIControl";
import type {DialogBox} from "./DialogBox";

export class ListBox  extends UIControl{
  protected readonly _listOfSelection: string[] = [];
  private _selection: string = '';
  
  constructor(owner: DialogBox) {
    super(owner);
  }
  
  getSelectionByIndex(index: number): string {
    return this._listOfSelection[index] || "";
  }
  
  get selection(): string {
    return this._selection;
  }
  
  set selection(value: string) {
    this._selection = value;
    this.owner.changed(this)
  }
}
