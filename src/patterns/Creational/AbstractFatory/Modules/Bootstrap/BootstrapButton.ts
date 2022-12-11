import type { IButton } from "../IButton";

export class BootstrapButton implements IButton {
  render(): void {
    console.log("BootstrapButton was rendered")
  }
}
