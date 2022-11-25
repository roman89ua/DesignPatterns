import type {IObserver} from "./IObserver";

export class Observer implements IObserver {
  private readonly method: Function;
  
  constructor(method: Function) {
    this.method = method;
  }
  
  updated(): void {
    this.method();
  }
}
