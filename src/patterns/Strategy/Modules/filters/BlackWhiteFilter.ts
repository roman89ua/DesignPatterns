import type {IImageFilter} from "./IImageFilters";

export class BlackWhiteFilter implements IImageFilter {
  apply(filterName: string): void {
    console.log("applying Black and white filter")
  }
}
