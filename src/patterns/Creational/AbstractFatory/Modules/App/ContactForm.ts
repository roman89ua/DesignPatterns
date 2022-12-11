// import { ThemeEnum } from "../ThemeEnum";
// import { BootstrapButton } from "../Bootstrap/BootstrapButton";
// import { BootstrapTextBox } from "../Bootstrap/BootstrapTextBox";
// import { MaterialButton } from "../Material/MaterialButton";
import type { IWidgetFactory } from "../IWidgetFactory";

export class ContactForm {

  // TODO problem
  // render(theme: ThemeEnum) {
  //   if(theme === ThemeEnum.Bootstrap) {
  //     new BootstrapButton().render();
  //     new BootstrapTextBox().render();
  //   }
  //   else if (theme = ThemeEnum.Material){
  //     new MaterialButton().render();
  //     new BootstrapTextBox().render();
  //   }
  // }

  //TODO Solution
  render(widgetFactory: IWidgetFactory) {
    widgetFactory.createButton().render();
    widgetFactory.createTextBox().render();
  }

}