import type { IEbook } from './IEbook';

export class Ebook implements IEbook {
  private readonly fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
    this.load();
  }
  private load() {
    console.log(`Loading ebook ${this.fileName}`);
  }

  show(): void {
    console.log(`Showing ebook ${this.fileName}`);
  }

  getFileName(): string {
    return this.fileName;
  }
}
