import type {ICommand} from "./ICommand";

export class Button {
  private label: string = "";
  private command: ICommand;
  
  constructor(command: ICommand) {
    this.command = command;
  }
  
  public click(): void {
    // unknown functionality
    this.command.execute();
  }
  
  getLabel(): string {
    return this.label;
  }
  
  setLabel(newLabel: string): Button {
    this.label = newLabel;
    return this
  }
}
