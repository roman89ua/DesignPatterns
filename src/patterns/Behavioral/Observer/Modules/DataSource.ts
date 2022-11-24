import {Subjects} from "./Subjects";

export class DataSource extends Subjects{
  private _value: string | number;
  
  constructor(startValue: number = 0) {
    super();
    this._value = startValue;
  }
  
  
  get value(): string | number {
    return this._value;
  }
  
  set value(value: string | number) {
    this._value = value;
    // !push implementation
    // this.notifyObservers<string | number>(value);
  
    this.notifyObservers();
  }
}
