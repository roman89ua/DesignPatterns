import {HtmlDocument} from "./Modules/HtmlDocument";
import {AnchorNode} from "./Modules/Nodes/AnchorNode";
import {HeadingNode} from "./Modules/Nodes/HeadingNode";
import {HighlightOperation} from "./Modules/Nodes/Operations/HighlightOperation";
import {SingleQuotesOperation} from "./Modules/Nodes/Operations/SingleQuotesOperation";

export class Visitor {
  constructor() {
    console.log("VISITOR PATTERN!!!");
    const htmlDoc = new HtmlDocument();
    const heading = new HeadingNode();
    const anchor = new AnchorNode()
    htmlDoc.addNodesToList(heading);
    htmlDoc.addNodesToList(anchor);
    htmlDoc.executeForAll(new HighlightOperation());
    htmlDoc.executeForAll(new SingleQuotesOperation());
  }
}
