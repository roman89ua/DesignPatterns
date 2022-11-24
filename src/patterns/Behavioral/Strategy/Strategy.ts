import {ImageStorage} from "./Modules/ImageStorage";
import {JpegCompresor} from "./Modules/compressors/JpegCompresor";
import {BlackWhiteFilter} from "./Modules/filters/BlackWhiteFilter";
import {PngCompressor} from "./Modules/compressors/PngCompressor";
import {HighContrastFilter} from "./Modules/filters/HighContrastFilter";

export class Strategy {
  constructor() {
    console.log("STRATEGY");
    const imageStorage = new ImageStorage()
    imageStorage.store("myImage.jpeg", new JpegCompresor(), new BlackWhiteFilter());
    imageStorage.store("myImage.jpeg", new PngCompressor(), new HighContrastFilter());
  }
}
