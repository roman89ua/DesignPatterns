import type {IOperation} from "./IOperation";
import type {AnchorNode} from "../AnchorNode";
import type {HeadingNode} from "../HeadingNode";

export class HighlightOperation implements IOperation{
  runAnchorNodeOperation(element: AnchorNode): void {
    console.log("Highlight Anchor Tag")
  }
  
  runHeadingOperation(element: HeadingNode): void {
    console.log("Highlight Heading Tag");
  }
}
