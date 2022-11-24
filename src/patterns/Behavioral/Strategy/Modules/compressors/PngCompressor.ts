import type {ICompressor} from "./ICompressor";
export class PngCompressor implements ICompressor{
  
  compress(fileName: string): void {
    console.log("Compressing to PNG format");
  }
}

