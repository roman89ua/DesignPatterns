import type { Image } from './Image';
import type { IFilter } from './IFilter';

export class ImageView {
  private readonly image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  apply(filter: IFilter) {
    filter.apply(this.image);
  }
}
