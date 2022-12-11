import type { IFurniture } from "./IFurniture";

export class Sofa implements IFurniture{
  presentation(): string {
    return "Best ever Sofa";
  }
  
}