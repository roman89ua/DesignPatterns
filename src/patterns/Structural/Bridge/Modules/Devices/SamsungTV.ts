import type { IDevice } from '../IDevice';

export class SamsungTV implements IDevice {
  setChanel(chanelNumber: number): void {
    console.log(`Samsung TV chanel switch to ${chanelNumber}`);
  }

  turnOff(): void {
    console.log('Samsung TV turnOff');
  }

  turnOn(): void {
    console.log('Samsung TV turnOn');
  }
}
