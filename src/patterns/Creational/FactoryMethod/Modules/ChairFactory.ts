import { FurnitureFactory } from "./FurnitureFactory";
import { Chair } from "./Chair";
import type { IFurniture } from "./IFurniture";

export class ChairFactory extends FurnitureFactory{
  factoryMethod(): IFurniture {
    return new Chair();
  }
}