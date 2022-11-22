import type {IObserver} from "./IObserver";

// Observable
export class Subjects {
  private _observers: Set<IObserver>
  
  constructor() {
    this._observers = new Set();
  }
  
  addObserver(newObserver: IObserver): void {
    this._observers.add(newObserver);
  }
  
  removeObserver(newObserver: IObserver): void {
    if(this._observers.has(newObserver)) this._observers.delete(newObserver);
  }
  // ! push implementation
  // notifyObservers<T> (value: T): void {
  //   this._observers.forEach((obs: IObserver) => obs.update(value));
  // }
  notifyObservers(): void {
    this._observers.forEach((obs: IObserver) => obs.update());
  }
}
