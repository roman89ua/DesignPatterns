import type { IFurniture } from "./IFurniture";

export abstract class FurnitureFactory {
  protected abstract factoryMethod(): IFurniture;
  public createCurrentFurniture() : string {
      const currentFurniture = this.factoryMethod();
      return `We have just created ${currentFurniture.presentation()}`;
    }
}