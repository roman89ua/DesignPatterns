import { PointsService } from './Modules/PointsService';
import { PointType } from './Modules/PointType';
import { PointIconFactory } from './Modules/PointIconFactory';

export class FlyWeight {
  constructor() {
    // case: google map
    console.log('FLY WEIGHT PATTERN');

    const mapPointsService = new PointsService(new PointIconFactory());
    mapPointsService.setPoints(1, 2, PointType.CAFE, 'someIconLink'); // creating a caffe on the map
    mapPointsService.getPoints().forEach((point) => point.draw());
  }
}
