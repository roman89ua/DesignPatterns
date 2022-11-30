import type {IOperation} from "./Nodes/Operations/IOperation";

export interface IHtmlNode {
  execute(operation: IOperation): void;
}
