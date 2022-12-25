import type { IFilter } from '../IFilter';
import type { Image } from '../Image';

export class VividFilter implements IFilter {
  apply(image: Image): void {
    console.log('Applying vivid filter');
  }
}
