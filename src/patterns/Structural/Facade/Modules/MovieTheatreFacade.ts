import type { BluRayPlayer } from './BluRayPlayer';
import type { Lights } from './Lights';
import type { SoundSystem } from './SoundSystem';
import type { TV } from './TV';
import type { PopcornMaker } from './PopcornMaker';

export class MovieTheatreFacade {
  private bluRay: BluRayPlayer;
  private light: Lights;

  private soundSystem: SoundSystem;
  private tv: TV;
  private popcornMaker: PopcornMaker;
  constructor(bluRay: BluRayPlayer, light: Lights, soundSystem: SoundSystem, tv: TV, popcornMaker: PopcornMaker) {
    this.bluRay = bluRay;
    this.light = light;
    this.soundSystem = soundSystem;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }
  startWatchingMovie() {
    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.tv.turnOn();

    this.soundSystem.turnOn();
    this.soundSystem.setVolume(50);

    this.bluRay.turnOn();
    this.bluRay.play();

    this.light.dim();
  }
}
