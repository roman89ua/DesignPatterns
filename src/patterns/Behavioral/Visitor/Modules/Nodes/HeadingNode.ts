import type {IHtmlNode} from "../IHtmlNode";
import type {IOperation} from "./Operations/IOperation";

export class HeadingNode implements IHtmlNode{
  execute(operation: IOperation): void {
    operation.runHeadingOperation(this);
  }
}
