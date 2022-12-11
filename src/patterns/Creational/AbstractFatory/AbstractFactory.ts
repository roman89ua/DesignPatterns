import { ContactForm } from "./Modules/App/ContactForm";
import { BootstrapFactory } from "./Modules/Bootstrap/BootstrapFactory";
import { MaterialFactory } from "./Modules/Material/MaterialFactory";

export class AbstractFactory {
  constructor() {
    console.log("ABSTRACT FACTORY PATTERN!!!");
    const contactForm = new ContactForm();
    contactForm.render(new BootstrapFactory());
    contactForm.render(new MaterialFactory());
  }
}