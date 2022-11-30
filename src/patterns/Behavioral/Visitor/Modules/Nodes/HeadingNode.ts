import type {IHtmlNode} from "../IHtmlNode";

export class HeadingNode implements IHtmlNode{
  
  highlightNode(): void {
    console.log("Highlight Heading Tag")
  }
}
