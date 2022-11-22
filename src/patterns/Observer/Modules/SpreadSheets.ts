import type {IObserver} from "./IObserver";
import type {DataSource} from "./DataSource";

export class SpreadSheets implements IObserver{
  private dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource
  }
  update(): void {
    console.log(`SpreadSheet got notified. value: ${this.dataSource.value}`);
  }
  // !push implementation
  // update<T>(value: T): void {
  //   console.log(`SpreadSheet got notified. value: ${value}`);
  // }
  
}
