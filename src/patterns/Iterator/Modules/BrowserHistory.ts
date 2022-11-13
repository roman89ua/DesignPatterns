import type {IIterator} from "./IIterator";

export class BrowserHistory {
  private urls: string[] = [];
  
  constructor(firstElementOfHistory: string) {
    this.push(firstElementOfHistory);
  }
  
  push(newUrl: string) {
    this.urls.push(newUrl);
  }
  
  pop () {
    return this.urls.pop();
  }
  
  createIterator (): IIterator<string> {
    return new this.CurrentIterator(this);
  }
  
  CurrentIterator = class implements IIterator<typeof this.urls[0]> {
    private history: BrowserHistory;
    private index: number
  
    constructor(history: BrowserHistory, index?: number) {
      this.history = history;
      this.index = index || 0;
    }
    
    current(): string {
      return  this.history.urls[this.index] ;
    }
  
    hasNext(): boolean {
      return (this.history.urls.length) > this.index;
    }
  
    goNext(): void {
      this.index++;
    }
  }
}
