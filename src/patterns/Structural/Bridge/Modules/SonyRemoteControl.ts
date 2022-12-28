import { RemoteControl } from './Abstraction/RemoteControl';

export class SonyRemoteControl extends RemoteControl {
  turnOff(): void {
    console.log('turn on TV');
  }

  turnOn(): void {
    console.log('turn off TV');
  }
}
