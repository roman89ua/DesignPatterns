import { RemoteControl } from './Modules/Features/RemoteControl';
import { SonyTV } from './Modules/Devices/SonyTV';
import { AdvancedRemoteControl } from './Modules/Features/AdvancedRemoteControl';
import { SamsungTV } from './Modules/Devices/SamsungTV';

export class Bridge {
  constructor() {
    console.log('BRIDGE PATTERN!!!');
    const remoteControl = new RemoteControl(new SonyTV());
    remoteControl.turnOn();
    const advancedRemoteControl = new AdvancedRemoteControl(new SamsungTV());
    advancedRemoteControl.setChanel(12);
  }
}
