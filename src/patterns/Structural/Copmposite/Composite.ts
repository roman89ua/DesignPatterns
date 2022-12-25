import { Shape } from './Modules/Shape';
import { Group } from './Modules/Group';

export class Composite {
  constructor() {
    console.log('COMPOSITE PATTERNS!!!');

    const squaresGroup = new Group();
    squaresGroup.add(new Shape());
    squaresGroup.add(new Shape());

    const circleGroup = new Group();
    circleGroup.add(new Shape());
    circleGroup.add(new Shape());
    circleGroup.add(new Shape());

    const highLevelGroup = new Group();

    highLevelGroup.add(squaresGroup);
    highLevelGroup.add(circleGroup);
    highLevelGroup.render();
  }
}
