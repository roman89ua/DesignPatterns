import type { IButton } from "./IButton";
import type { ITextBox } from "./ITextBox";

export interface IWidgetFactory {
  createButton(): IButton
  createTextBox(): ITextBox
}