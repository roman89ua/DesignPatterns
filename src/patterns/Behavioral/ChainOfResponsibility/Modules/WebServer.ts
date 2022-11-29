import type {HttpRequest} from "./HttpRequest";

import type {Handler} from "./Handler";

export class WebServer {
  private handler: Handler;
  
  constructor(handler: Handler) {
    this.handler = handler;
  }
  
  public handle(request: HttpRequest) {
    this.handler.handle(request);
  }
}
