import { AdvancedRemoteControl } from './Abstraction/AdvancedRemoteControl';

export class SonyAdvancedRemoteControl extends AdvancedRemoteControl {
  setChanel(chanelNumber: number): void {
    console.log(`Switching chanel to ${chanelNumber}`);
  }

  turnOff(): void {
    console.log('turn on sony TV');
  }

  turnOn(): void {
    console.log('turn off sony TV');
  }
}

/**
 * Problem
 * every time when we will need to create new remote control for different
 * type or brand, we will have to create two new classes for each time for each
 * new device.
 * for example if we will have a hundred remote controls we will have 200 hundreds
 * classes
 *
 * */
