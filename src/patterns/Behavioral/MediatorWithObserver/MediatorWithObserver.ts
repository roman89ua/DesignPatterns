import {ItemsDialogBox} from "./Modules/ItemsDialogBox";

export class MediatorWithObserver {
  constructor() {
    console.log("MEDIATOR PATTERN WITH OBSERVER!!!");
    const dialogWindow = new ItemsDialogBox();
    dialogWindow.simulateUsersInteraction();
  }
}
