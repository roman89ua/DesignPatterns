import type { ITextBox } from "../ITextBox";

export class BootstrapTextBox implements ITextBox {
  render(): void {
    console.log("BootstrapTextBox was rendered")
  }
}