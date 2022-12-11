import { FurnitureFactory } from "./FurnitureFactory";
import type { IFurniture } from "./IFurniture";
import { Sofa } from "./Sofa";

export class SofaFactory extends FurnitureFactory{
  factoryMethod(): IFurniture {
    return new Sofa();
  }
}