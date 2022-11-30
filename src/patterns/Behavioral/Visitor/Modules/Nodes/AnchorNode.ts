import type {IHtmlNode} from "../IHtmlNode";

export class AnchorNode implements IHtmlNode{
  
  highlightNode(): void {
    console.log("Highlight Anchor Tag")
  }
}
