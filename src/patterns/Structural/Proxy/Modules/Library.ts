import type { IEbook } from './IEbook';

export class Library {
  private booksList: Map<string, IEbook> = new Map<string, IEbook>();
  addBook(ebook: IEbook): void {
    this.booksList.set(ebook.getFileName(), ebook);
  }

  openEbook(bookName: string): void {
    this.booksList.get(bookName)?.show();
  }
}
