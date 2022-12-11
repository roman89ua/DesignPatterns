import type { IFurniture } from "./IFurniture";

export abstract class FurnitureFactory {
  protected abstract factory(): IFurniture;
  public createCurrentFurniture() : string {
      const currentFurniture = this.factory();
      return `We have just created ${currentFurniture.presentation()}`;
    }
}