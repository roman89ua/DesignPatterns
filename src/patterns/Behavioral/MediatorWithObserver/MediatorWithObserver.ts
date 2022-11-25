import {ItemsDialogBox} from "./Modules/ItemsDialogBox";

export class MediatorWithObserver {
  constructor() {
    console.log("MEDIATOR PATTERN!!!");
    const dialogWindow = new ItemsDialogBox();
    dialogWindow.simulateUsersInteraction();
  }
}
