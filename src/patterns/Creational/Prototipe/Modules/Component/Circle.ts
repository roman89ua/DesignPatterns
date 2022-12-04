import type {IComponent} from "./IComponent";

export class Circle implements IComponent {
  private _radius: number;
  
  constructor(radius: number = 1) {
    this._radius = radius;
  }
  
  getRadius(): number {
    return this._radius;
  }
  
  setRadius(value: number) {
    this._radius = value;
  }
  
  clone(): IComponent {
    return new Circle(this._radius);
  }
  
  render(): void {
    console.log(`Circle render with radius = ${this.getRadius()}`);
  }
}
