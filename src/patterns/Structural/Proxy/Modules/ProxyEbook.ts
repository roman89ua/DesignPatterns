import type { IEbook } from './IEbook';
import { Ebook } from './Ebook';

export class ProxyEbook implements IEbook {
  private readonly fileName: string;

  private realEbook: IEbook | null = null;
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  getFileName(): string {
    return this.fileName;
  }

  show(): void {
    if (this.realEbook === null) {
      this.realEbook = new Ebook(this.fileName);
    }
    this.realEbook.show();
  }
}
