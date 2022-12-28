import { Library } from './Modules/Library';
import { Ebook } from './Modules/Ebook';
import { ProxyEbook } from './Modules/ProxyEbook';

export class Proxy {
  constructor() {
    console.log('PROXY PATTERN!!!');

    const library = new Library();
    const list = ['a', 'b', 'c'];

    console.log('WAS');
    list.forEach((book) => library.addBook(new Ebook(book)));
    console.log('BECOME');
    list.forEach((book) => library.addBook(new ProxyEbook(book)));

    library.openEbook(list[2]);
  }
}

/*
 * Problem
 *
 *All ebooks was loaded in te memory even if user not need them all
 *
 * */
