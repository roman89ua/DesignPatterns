import { ImageView } from './Modules/ImageView';
import { Image } from './Modules/Image';
import { VividFilter } from './Modules/Filters/VividFilter';
import { BlackAndWhiteAdapterFilter } from './Modules/FiltersAdapters/BlackAndWhiteAdapterFilter';
import { BlackAndWhiteFilter } from './Modules/ExternalFiltersLibrary/Filters/BlackAndWhiteFilter';
export class Adapter {
  constructor() {
    console.log('ADAPTER PATTERN!!!');

    const imageView = new ImageView(new Image());
    imageView.apply(new VividFilter());

    imageView.apply(new BlackAndWhiteAdapterFilter(new BlackAndWhiteFilter()));
  }
}
