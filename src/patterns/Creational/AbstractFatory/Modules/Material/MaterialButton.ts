import type { IButton } from "../IButton";

export class MaterialButton implements IButton{
  render(): void {
    console.log("Material button rendered")
  }
}