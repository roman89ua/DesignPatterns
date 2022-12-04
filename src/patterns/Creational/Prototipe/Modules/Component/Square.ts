import type {IComponent} from "./IComponent";

export class Square implements IComponent{
  private _side: number;
  
  constructor(side: number = 1) {
    this._side = side;
  }
  
  getSide(): number {
    return this._side;
  }
  
  setSide(value: number) {
    this._side = value;
  }
  
  clone(): IComponent {
    return new Square(this._side);
  }
  
  render(): void {
    console.log(`Render Square component with side size = ${this.getSide()}`);
  }
}
