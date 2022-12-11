import type { ITextBox } from "../ITextBox";

export class MaterialTextBox implements ITextBox{
  render(): void {
    console.log("Material text box rendered")
  }

}