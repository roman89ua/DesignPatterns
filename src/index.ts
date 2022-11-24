/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from "canvas-confetti";
import { Memento } from "./patterns/Behavioral/Memento/Memento";
import { State } from "./patterns/Behavioral/State/State";
import { Iterator } from "./patterns/Behavioral/Iterator/Iterator";
import { Strategy } from "./patterns/Behavioral/Strategy/Strategy";
import { TemplateMethod } from "./patterns/Behavioral/TemplateMethod/TemplateMethod";
import { Command } from "./patterns/Behavioral/Command/Command";
import { Observer } from "./patterns/Behavioral/Observer/Observer";
import { Mediator } from "./patterns/Behavioral/Mediator/Mediator";

confetti.create(document.getElementById("canvas") as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

new Memento();
new State("Red", "1px");
new Iterator();
new Strategy();
new TemplateMethod();
new Command();
new Observer();
new Mediator();
