import { RemoteControl } from './RemoteControl';
import type { IDevice } from '../IDevice';

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: IDevice) {
    super(device);
  }
  setChanel(chanelNumber: number): void {
    this.device.setChanel(chanelNumber);
  }
}
