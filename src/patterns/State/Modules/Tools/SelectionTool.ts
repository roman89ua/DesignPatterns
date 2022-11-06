import type { ITool } from "../ITool";

export class SelectTool implements ITool {
  mouseDown(): void {
    console.log("Selection icon");
  }
  mouseUp(): void {
    console.log("Drow a dashed rectangle");
  }
}
