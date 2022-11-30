import type {IOperation} from "./IOperation";
import type {AnchorNode} from "../AnchorNode";
import type {HeadingNode} from "../HeadingNode";

export class SingleQuotesOperation implements IOperation{
  runAnchorNodeOperation(element: AnchorNode): void {
    console.log("Single quotes for all Anchors");
  }
  
  runHeadingOperation(element: HeadingNode): void {
    console.log("Single quotes for all Headings")
  }
}
