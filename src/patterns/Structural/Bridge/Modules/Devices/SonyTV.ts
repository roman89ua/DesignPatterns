import type { IDevice } from '../IDevice';

export class SonyTV implements IDevice {
  setChanel(chanelNumber: number): void {
    console.log(`Sony TV chanel switch to ${chanelNumber}`);
  }

  turnOff(): void {
    console.log('Sony TV turnOff');
  }

  turnOn(): void {
    console.log('Sony TV turnOn');
  }
}
