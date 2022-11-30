import {HtmlDocument} from "./Modules/HtmlDocument";
import {AnchorNode} from "./Modules/Nodes/AnchorNode";
import {HeadingNode} from "./Modules/Nodes/HeadingNode";

export class Visitor {
  constructor() {
    console.log("VISITOR PATTERN!!!");
    const htmlDoc = new HtmlDocument();
    htmlDoc.addNodesToList(new HeadingNode());
    htmlDoc.addNodesToList(new AnchorNode());
    htmlDoc.highlightAllTags();
  }
}
