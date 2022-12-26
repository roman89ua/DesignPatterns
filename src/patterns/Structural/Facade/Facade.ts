import { MovieTheatreFacade } from './Modules/MovieTheatreFacade';
import { BluRayPlayer } from './Modules/BluRayPlayer';
import { Lights } from './Modules/Lights';
import { SoundSystem } from './Modules/SoundSystem';
import { TV } from './Modules/TV';
import { PopcornMaker } from './Modules/PopcornMaker';

export class Facade {
  constructor() {
    console.log('FACADE PATTERN');

    const movieTheatre = new MovieTheatreFacade(
      new BluRayPlayer(),
      new Lights(),
      new SoundSystem(),
      new TV(),
      new PopcornMaker(),
    );

    movieTheatre.startWatchingMovie();
  }
}
