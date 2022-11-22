import {DataSource} from "./Modules/DataSource";
import {SpreadSheets} from "./Modules/SpreadSheets";
import {Chart} from "./Modules/Chart";

export class Observer {
  constructor() {
    console.log("OBSERVER PATTERN!!!");
    const dataSource = new DataSource();
    const sheet1 = new SpreadSheets(dataSource);
    const chart = new Chart(dataSource);
    // ! push implementation
    // const sheet1 = new SpreadSheets();
    // const chart = new Chart();
    dataSource.addObserver(sheet1);
    dataSource.addObserver(chart);
    dataSource.value = 1;
    console.log(dataSource.value);
  }
}
