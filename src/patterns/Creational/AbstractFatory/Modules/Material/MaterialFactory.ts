import type { IWidgetFactory } from "../IWidgetFactory";
import { MaterialButton } from "./MaterialButton";
import { MaterialTextBox } from "./MaterialTextBox";
import type { ITextBox } from "../ITextBox";
import type { IButton } from "../IButton";

export class MaterialFactory implements IWidgetFactory{
  createButton(): IButton {
    return new MaterialButton();
  }

  createTextBox(): ITextBox {
    return new MaterialTextBox() ;
  }

}