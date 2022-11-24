import {ItemsDialogBox} from "./Modules/ItemsDialogBox";

export class Mediator {
  constructor() {
    console.log("MEDIATOR PATTERN!!!");
    const dialogWindow = new ItemsDialogBox();
    dialogWindow.simulateUsersInteraction();
  }
}
