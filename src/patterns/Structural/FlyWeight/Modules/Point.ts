import type { PointIcon } from './PointIcon';

export class Point {
  private readonly x: number;
  private readonly y: number;
  // private readonly type: PointType;
  // private pointIcon: string;
  private pointIcon: PointIcon;
  constructor(x: number, y: number, /* type: PointType, pointIcon: string*/ pointIcon: PointIcon) {
    this.x = x; // 4 bytes
    this.y = y; // 4 bytes
    // this.type = type; // 4 bytes
    // this.pointIcon = pointIcon; // 20KB
    // /*
    //   Problem here !
    //   when the map will have thousands of same icons it can have influence on performance of the app
    // */
    this.pointIcon = pointIcon;
  }

  draw(): void {
    console.log(`${this.pointIcon.getType()} at (${this.x}, ${this.y}) `);
  }
}
