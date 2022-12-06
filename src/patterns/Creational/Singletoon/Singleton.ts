import { WashingMachine } from "./Modules/WashingMachine";

export class Singleton {
  constructor() {
    console.log("SINGLETON PATTERN!!!");
    const washingMachine = WashingMachine.getInstance();
    washingMachine.add("#1", {name: "Roman", surName: "Kostiuk"});

    const washingMachine2 = WashingMachine.getInstance();
    washingMachine2.add("#2", {name: "Julia", surName: "Bolgak"});

    console.log(washingMachine2.get("#1"));
    console.log(washingMachine2.get("#2"));
    console.log(washingMachine.get("#1"));
    console.log(washingMachine.get("#2"));
  }
}