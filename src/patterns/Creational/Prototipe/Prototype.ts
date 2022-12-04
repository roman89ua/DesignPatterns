import {Square} from "./Modules/Component/Square";
import {Circle} from "./Modules/Component/Circle";
import {ContextMenu} from "./Modules/ContextMenu";

export class Prototype {
  constructor() {
    console.log("PROTOTYPE PATTERN");
    const square = new Square(5);
    const circle = new Circle( 200);
    const contextMenu = new ContextMenu();
    square.setSide(1000);
    contextMenu.duplicate(circle);
    contextMenu.duplicate(square)
  }
}
