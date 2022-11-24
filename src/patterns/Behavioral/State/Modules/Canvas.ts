import type { ITool } from "./ITool";
export class Canvas {
  private currentTool: ITool;

  constructor(defaultTool: ITool) {
    this.currentTool = defaultTool;
  }

  public mouseDown(): void {
    this.currentTool.mouseDown();
  }
  public mouseUp(): void {
    this.currentTool.mouseUp();
  }

  public setCurrentTool(newToll: ITool): void {
    this.currentTool = newToll;
  }

  public getTool(): ITool {
    return this.currentTool;
  }
}
