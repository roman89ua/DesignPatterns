import type { IFurniture } from "./IFurniture";

export class Chair implements IFurniture{
  presentation(): string {
    return "Very comfortable Chair";
  }
}