import type { IStream } from './IStream';

export class Decorator implements IStream {
  protected stream: IStream;
  constructor(stream: IStream) {
    this.stream = stream;
  }

  write(data: string): void {
    this.stream.write(data);
  }
}
