import { Point } from './Point';
import type { PointType } from './PointType';

export class PointsService {
  private points: Point[] = [];
  setPoints(x: number, y: number, type: PointType, icon: string): void {
    this.points.push(new Point(x, y, type, icon));
  }
  getPoints() {
    return this.points;
  }
}
