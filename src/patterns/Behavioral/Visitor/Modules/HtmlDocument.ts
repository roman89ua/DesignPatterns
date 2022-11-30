import type {IHtmlNode} from "./IHtmlNode";

export class HtmlDocument {
  private listOfNodes: IHtmlNode[];
  
  constructor(listOfNodes?: IHtmlNode[]) {
    this.listOfNodes = listOfNodes || [];
  }
  
  addNodesToList(newNode: IHtmlNode) {
    this.listOfNodes.push(newNode);
  }
  
  highlightAllTags() {
    this.listOfNodes.forEach(node => node.highlightNode())
  }
}
