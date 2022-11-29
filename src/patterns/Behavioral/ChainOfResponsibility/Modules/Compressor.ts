import type {HttpRequest} from "./HttpRequest";
import {Handler} from "./Handler";

export class Compressor extends Handler{
  constructor(next: Handler | null) {
    super(next);
  }
  
  doHandle(request: HttpRequest): boolean {
    console.log("Compressed");
    return false;
  }
}
