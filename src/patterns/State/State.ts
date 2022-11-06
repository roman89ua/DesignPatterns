import { BrushTool } from "./Modules/Tools/BrushTool";
import { SelectTool } from "./Modules/Tools/SelectionTool";
import { Canvas } from "./Modules/Canvas";
import { EraserTool } from "./Modules/Tools/EraserTool";

export class State {
  private color: string;
  private size: string;

  constructor(color: string, size: string) {
    this.color = color;
    this.size = size;
    const canvas = new Canvas(new SelectTool());
    canvas.mouseDown();
    canvas.mouseUp();

    canvas.setCurrentTool(new BrushTool(this.color, this.size));
    canvas.mouseDown();
    canvas.mouseUp();
    canvas.setCurrentTool(new EraserTool());
    canvas.mouseDown();
    canvas.mouseUp();
  }
}
