import type {HttpRequest} from "./HttpRequest";
import {Handler} from "./Handler";

export class Logger extends Handler{
  constructor(next: Handler | null) {
    super(next);
  }
  
  doHandle(request: HttpRequest): boolean {
    console.log("Logged");
    return false;
  }
}
