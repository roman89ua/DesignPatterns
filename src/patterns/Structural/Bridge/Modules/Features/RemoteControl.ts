import type { IDevice } from '../IDevice';

export class RemoteControl {
  protected device: IDevice;
  constructor(device: IDevice) {
    this.device = device;
  }

  turnOn(): void {
    this.device.turnOn();
  }
  turnOff(): void {
    this.device.turnOff();
  }
}
