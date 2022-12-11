import type { FurnitureFactory } from "./Modules/FurnitureFactory";

export class FactoryMethod {
  constructor(furnitureFactory: FurnitureFactory){
    console.log("FACTORY METHOD PATTERN!!!");
    // A lot of code here
    console.log(furnitureFactory.createCurrentFurniture());
    // A lot of code here as well
  }
}
