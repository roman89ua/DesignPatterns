import {BrowserHistory} from "./Modules/BrowserHistory";

export class Iterator {
  constructor() {
    console.log("ITERATOR");
    const browserHistory = new BrowserHistory("https://coursehunter.net")
    browserHistory.push("https://coursehunter.net2");
    browserHistory.push("https://coursehunter.net3");
    browserHistory.push("https://coursehunter.net4");
    browserHistory.push("https://coursehunter.net5");
    browserHistory.push("https://coursehunter.net6");
    browserHistory.push("https://coursehunter.net7");
    const iterator = browserHistory.createIterator();
    
    while (iterator.hasNext()) {
      console.log(iterator.current())
      iterator.goNext()
    }
  }
}
