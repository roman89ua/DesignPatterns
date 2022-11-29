import type {HttpRequest} from "./HttpRequest";

export abstract class Handler {
  private readonly next: Handler | null;
  
  protected constructor(next: Handler | null) {
    this.next = next;
  }
  
  public handle(request: HttpRequest) {
    if(this.doHandle(request)) return;
    if(!!this?.next) this.next.handle(request);
  }
  
  public abstract doHandle(request: HttpRequest): boolean;
}
