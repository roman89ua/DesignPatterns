import type { PointType } from './PointType';
import { PointIcon } from './PointIcon';

export class PointIconFactory {
  private iconsHash: Map<PointType, PointIcon> = new Map<PointType, PointIcon>();
  getPointIcon(type: PointType, icon: string): PointIcon {
    if (!this.iconsHash.has(type)) {
      this.iconsHash.set(type, new PointIcon(type, icon));
    }

    return this.iconsHash.get(type)!;
  }
}
