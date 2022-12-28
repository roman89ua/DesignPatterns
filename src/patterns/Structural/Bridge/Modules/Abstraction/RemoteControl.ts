// Basic remote control (turn on, off)
// Advanced Remote control (setChanel)
// Movie Remote Control (play, pause, rewind)

export abstract class RemoteControl {
  abstract turnOn(): void;
  abstract turnOff(): void;
}
