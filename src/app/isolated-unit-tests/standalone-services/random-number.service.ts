import {Injectable} from '@angular/core';


@Injectable()
export class RandomNumberService {

  getRandomNumber(min?: number, max?: number) : number {

    if ((!min || min == null) && (!max || max == null)) {
      // No args: Random between 0 and 1
      min = 0;
      max = 1;
    } else if ((!min || min == null) && max) {
      // No min value, assume lowest possible
      min = Number.MIN_VALUE;
    } else if ((!max || max == null) && min) {
      // No max value, assume highest possible
      max = Number.MAX_VALUE;
    } else {
      // Both numbers specified
    }


    const random01 = Math.random();
    const delta = (max - min) * random01;
    const randomNumber = min + delta;

    return randomNumber;

  }

}
