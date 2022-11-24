import type { ITool } from "../ITool";

export class BrushTool implements ITool {
  private brushSize: string;
  private brushColor: string;

  constructor(color: string, size: string) {
    this.brushColor = color;
    this.brushSize = size;
  }

  mouseDown(): void {
    console.log("Brush icon");
  }
  mouseUp(): void {
    console.log(
      `Drow a line with size ${this.brushSize} and color ${this.brushColor}`
    );
  }

  setToolSize(size: string): void {
    this.brushSize = size;
  }
  getToolSize(): string {
    return this.brushSize;
  }
  setToolColor(color: string): void {
    this.brushSize = color;
  }
  getToolColor(): string {
    return this.brushColor;
  }
}
