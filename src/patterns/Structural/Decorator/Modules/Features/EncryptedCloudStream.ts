// import { CloudStream } from './CloudStream';
// export class EncryptedCloudStream extends CloudStream {
//   write(data: string) {
//     const encrypted = this.encrypt(data);
//     super.write(encrypted);
//   }
import { Decorator } from '../Decorator';
export class EncryptedCloudStream extends Decorator {
  write(data: string) {
    const encrypted = this.encrypt(data);
    super.write(encrypted);
  }
  private encrypt(data: string): string {
    console.log('encrypting...');
    return `${data} - Encrypted`;
  }
}
