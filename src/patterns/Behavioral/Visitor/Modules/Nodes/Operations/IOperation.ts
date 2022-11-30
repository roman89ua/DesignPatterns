import type {AnchorNode} from "../AnchorNode";
import type {HeadingNode} from "../HeadingNode";

export interface IOperation {
  runAnchorNodeOperation(element: AnchorNode): void
  runHeadingOperation(element: HeadingNode): void
}
