import type { PointType } from './PointType';

export class PointIcon {
  private readonly _type: PointType;
  private readonly _pointIcon: string;
  constructor(type: PointType, pointIcon: string) {
    this._type = type;
    this._pointIcon = pointIcon;
  }
  getType(): PointType {
    return this._type;
  }
}
