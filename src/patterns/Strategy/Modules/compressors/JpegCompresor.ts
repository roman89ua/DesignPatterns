import type {ICompressor} from "./ICompressor";

export class JpegCompresor implements ICompressor{
  compress(fileName: string): void {
    console.log("Compressing to JPEG format");
  }
  
}
