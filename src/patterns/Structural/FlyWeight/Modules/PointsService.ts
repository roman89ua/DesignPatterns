import { Point } from './Point';
import type { PointType } from './PointType';
import type { PointIconFactory } from './PointIconFactory';

export class PointsService {
  private points: Point[] = [];
  private iconFactory: PointIconFactory;
  constructor(iconFactory: PointIconFactory) {
    this.iconFactory = iconFactory;
  }
  setPoints(x: number, y: number, type: PointType, icon: string): void {
    this.points.push(new Point(x, y, this.iconFactory.getPointIcon(type, icon)));
  }
  getPoints() {
    return this.points;
  }
}
