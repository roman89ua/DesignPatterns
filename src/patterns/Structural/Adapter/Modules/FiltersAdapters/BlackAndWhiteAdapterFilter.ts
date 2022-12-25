import type { IFilter } from '../IFilter';
import type { Image } from '../Image';
import type { BlackAndWhiteFilter } from '../ExternalFiltersLibrary/Filters/BlackAndWhiteFilter';

export class BlackAndWhiteAdapterFilter implements IFilter {
  private blackAndWhite: BlackAndWhiteFilter;
  constructor(blackAndWhiteFilter: BlackAndWhiteFilter) {
    this.blackAndWhite = blackAndWhiteFilter;
  }
  apply(image: Image): void {
    this.blackAndWhite.init();
    this.blackAndWhite.render(image);
  }
}
