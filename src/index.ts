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
import { MediatorWithObserver } from "./patterns/Behavioral/MediatorWithObserver/MediatorWithObserver";
import { ChainOfResponsibility } from "./patterns/Behavioral/ChainOfResponsibility/ChainOfResponsibility";
import { Visitor } from "./patterns/Behavioral/Visitor/Visitor";
import { Prototype } from "./patterns/Creational/Prototipe/Prototype";
import { Singleton } from "./patterns/Creational/Singletoon/Singleton";
import { FactoryMethod } from "./patterns/Creational/FactoryMethod/FactoryMethod";
import { ChairFactory } from "./patterns/Creational/FactoryMethod/Modules/ChairFactory";
import { SofaFactory } from "./patterns/Creational/FactoryMethod/Modules/SofaFactory";
import { AbstractFactory } from "./patterns/Creational/AbstractFatory/AbstractFactory";
import { Builder } from "./patterns/Creational/Builder/Builder";

confetti.create(document.getElementById("canvas") as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

//Behavioral Design Patterns
new Memento();
new State("Red", "1px");
new Iterator();
new Strategy();
new TemplateMethod();
new Command();
new Observer();
new Mediator();
new MediatorWithObserver()
new ChainOfResponsibility();
new Visitor();

// Creational Design Patterns
new Prototype();
new Singleton();
new FactoryMethod(new ChairFactory() /*new SofaFactory()*/);
new FactoryMethod(/*new ChairFactory()*/ new SofaFactory());
new AbstractFactory();
new Builder();

console.log("B");

