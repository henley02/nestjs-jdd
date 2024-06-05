import { Injectable } from '@nestjs/common';
import { decryption, encryption } from './utils/request';

@Injectable()
export class AppService {
  getHello(): string {
    const request =
      'vU9OZmOQo5fYC6i26WbVO8ik15zoIAj2DhDPlvpvDfo9i2cNz5DteIYOE1d/wY+4ovc9QG3tyLuFMsw2K4q6oyrLqTwzatqs66Ee0WwJibCJ2JXP9stmZoVuWMAcZi+mA6oTZjVqKVcWQjodkZyDbnz8PXcz6UIxPr08NSHibTzKzfDJKAPfx3Uao4VN87Lydfj2FN4n30uF0E1yv3fCK97+Vi0ivHb5GeyrwgPztyLfhW16T23VQCZWk9YR8besX4Q9YzxPbRexvWRie8NH6ktNCMutfeqq4IwcPLdjKhsRiF8aJrjyzShD6kZAy21gPqYrUF6zGGhy4vOn6+meKHM2+bdn55596N00jz82YagGtNCTcPkAdntiaSs/C5qPH425KmCgH706SI7zpSF1oRgrBXbT0l/VulgHzjs2nBJgoY/flAz/9YDmhXnjlX6yAUnHq5EjzcJ/aJqN2CrOEev8jsIS3XNxwZSGTB1j35ood8u8bBwAxhqWTr5/rV1HFGkx94PX4gTJWKg9RtZbyfcMwHmUshe2Vce67dP4qkMDLdyiokOQXp/k/p1NyBVz';
    return decryption(request);
  }

  encryption(): any {
    const params = {
      header: {
        uuid: 'e90be8406cef4c049bd8ffc7ec5e9949',
        platformCode: 'h5mobile',
        appVersion: '4.0.2',
        platformVersion: '4.0.2',
        cmdName: 'h5_zz',
        cmdId: 0,
        action: 1000,
        brand: 'szcapp',
      },
      body: {
        bannerType: 15,
        operationType: 145,
        operationType2: 146,
        maxReviewType: 2,
        entranceLimit: 10,
        entranceVer221: 1,
      },
    };
    return encryption(params);
    // .replace(/\%2B/g, '+');
  }
}
