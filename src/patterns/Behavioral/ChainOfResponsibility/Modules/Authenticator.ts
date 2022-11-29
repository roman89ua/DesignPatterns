import type {HttpRequest} from "./HttpRequest";
import {Handler} from "./Handler";

export class Authenticator extends Handler{
  constructor(next: Handler | null) {
    super(next);
  }
  
  doHandle(request: HttpRequest): boolean {
    const isValid = (request.getUseName() === "admin" && request.getPassword() === "1234");
    console.log("Authenticated");
    return !isValid;
  }
}
