import type { IStream } from './IStream';

// export class CloudStream {
//   write(data: string) {
//     console.log('Storing ' + data + ' in the cloud');
//   }
// }
export class CloudStream implements IStream {
  write(data: string) {
    console.log('Storing ' + data + ' in the cloud.');
  }
}
