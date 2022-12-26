import { CloudStream } from './Modules/CloudStream';
import { EncryptedCloudStream } from './Modules/Features/EncryptedCloudStream';
import { CompressedCloudStream } from './Modules/Features/CompressedCloudStream';

export class DecoratorMain {
  constructor() {
    /* case: storing data in the cloud*/
    console.log('DECORATOR PATTERN');
    // feature storing data in the cloud
    // const cloudStream = new CloudStream();
    // cloudStream.write('Important data');

    // new feature: encrypt data before storing in the cloud
    // const encryptedCloudStream = new EncryptedCloudStream();
    // encryptedCloudStream.write('New Important Data');

    // new feature compressing data before storing in the cloud

    new CompressedCloudStream(new EncryptedCloudStream(new CloudStream())).write('1234-1234-1234-1234');
  }
}
