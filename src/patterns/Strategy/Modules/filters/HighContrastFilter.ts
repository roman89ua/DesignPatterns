import type {IImageFilter} from "./IImageFilters";

export class HighContrastFilter implements IImageFilter {
  apply(filterName: string): void {
    console.log("applying high contrast filter");
  }
}
