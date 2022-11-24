import type { ITool } from "./../ITool";
export class EraserTool implements ITool {
  mouseDown(): void {
    console.log("Eraser icon");
  }
  mouseUp(): void {
    console.log("Erase elments from canvas");
  }
}
