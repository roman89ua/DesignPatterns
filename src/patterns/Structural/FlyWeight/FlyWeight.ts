import { PointsService } from './Modules/PointsService';
import { PointType } from './Modules/PointType';

export class FlyWeight {
  constructor() {
    // case: google map
    console.log('FLY WEIGHT PATTERN');

    const mapPointsService = new PointsService();
    mapPointsService.setPoints(1, 2, PointType.CAFE, 'someIconLink');
    mapPointsService.getPoints().forEach((point) => point.draw());
  }
}
