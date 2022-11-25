import type {IObserver} from "./Observer/IObserver";

export abstract class UIControl {
  private observers: Set<IObserver> = new Set<IObserver>();
  
  attach (observer: IObserver) {
    this.observers.add(observer);
  }
  
  remove(observer: IObserver) {
    this.observers.delete(observer);
  }
  
  protected notifyObservers() {
    this.observers.forEach(obs => obs.updated())
  }
}
