import type {IHtmlNode} from "./IHtmlNode";
import type {IOperation} from "./Nodes/Operations/IOperation";

export class HtmlDocument {
  private listOfNodes: IHtmlNode[];
  
  constructor(listOfNodes?: IHtmlNode[]) {
    this.listOfNodes = listOfNodes || [];
  }
  
  addNodesToList(newNode: IHtmlNode) {
    this.listOfNodes.push(newNode);
  }
  
  executeForAll(operation: IOperation) {
    this.listOfNodes.forEach(node => node.execute(operation));
  }
}
