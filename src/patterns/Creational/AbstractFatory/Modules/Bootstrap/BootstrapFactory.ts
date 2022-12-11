import type { IWidgetFactory } from "../IWidgetFactory";
import type { IButton } from "../IButton";
import type { ITextBox } from "../ITextBox";
import { BootstrapButton } from "./BootstrapButton";
import { BootstrapTextBox } from "./BootstrapTextBox";

export class BootstrapFactory implements IWidgetFactory{
  createButton(): IButton {
    return new BootstrapButton();
  }

  createTextBox(): ITextBox {
    return new BootstrapTextBox();
  }

}