import type {IImageFilter} from "./filters/IImageFilters";
import type {ICompressor} from "./compressors/ICompressor";

export class ImageStorage {
  private compressor: ICompressor | undefined;
  private filter: IImageFilter | undefined;
  // TODO first implementation
  //
  // constructor(compressor: ICompressor, filter: IImageFilter) {
  //   this.compressor = compressor;
  //   this.filter = filter;
  // }
  // store(fileName: string) {
  //   this.compressor.compress(fileName);
  //   this.filter.apply(fileName);
  // }
  // TODO second way (more comfortable)
  
  store(fileName: string, compressor: ICompressor, filter: IImageFilter) {
    this.compressor = compressor;
    this.filter = filter;
    this.compressor.compress(fileName);
    this.filter.apply(fileName);
  }
}
