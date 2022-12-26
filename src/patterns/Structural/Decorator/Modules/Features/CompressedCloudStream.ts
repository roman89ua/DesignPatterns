// import { CloudStream } from './CloudStream';
import { Decorator } from '../Decorator';

// export class CompressedCloudStream extends CloudStream {
//   write(data: string) {
//     const compressed = this.compressData(data);
//     super.write(compressed);
//   }
export class CompressedCloudStream extends Decorator {
  write(data: string) {
    const compressed = this.compressData(data);
    super.write(compressed);
  }
  private compressData(data: string): string {
    console.log('compressing...');
    return `${data} - Compressed`;
  }
}
