import type {IHtmlNode} from "../IHtmlNode";
import type {IOperation} from "./Operations/IOperation";

export class AnchorNode implements IHtmlNode{
  execute(operation: IOperation): void {
    operation.runAnchorNodeOperation(this);
  }
}
