import { RemoteControl } from './RemoteControl';

export abstract class AdvancedRemoteControl extends RemoteControl {
  abstract setChanel(chanelNumber: number): void;
}
