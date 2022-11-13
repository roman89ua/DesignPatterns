import { Memento } from "./patterns/Memento/Memento";
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from "canvas-confetti";
import { State } from "./patterns/State/State";
import {Iterator} from "./patterns/Iterator/Iterator";

confetti.create(document.getElementById("canvas") as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

const memento = new Memento();
const state = new State("Red", "1px");
const iterator = new Iterator();
