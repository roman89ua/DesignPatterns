import type { Image } from '../../Image';

export class BlackAndWhiteFilter {
  public init() {
    console.log('Library initialization');
  }

  render(image: Image) {
    console.log(`Applying ${this.constructor.name} and ${image.constructor.name}`);
  }
}
