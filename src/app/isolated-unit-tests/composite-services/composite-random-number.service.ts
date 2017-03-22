import {Injectable} from "@angular/core";
import {RandomNumberService} from "../standalone-services/random-number.service";

/*
  Example of aggregate service which depends on other services
 */
@Injectable()
export class CompositeRandomNumberService {


  constructor(private service: RandomNumberService) {
  }

  getRandomNumberFrom0To1000() : number {
    const randomBase = this.service.getRandomNumber(0, 1000);

    if (randomBase < 0 || randomBase > 1000) {
      throw new Error('Unexpected return from RandomNumberService when asked for 0..1000: ' + randomBase);
    }

    const randomMultiplier = this.service.getRandomNumber();

    if (randomMultiplier < 0 || randomMultiplier > 1) {
      throw new Error('Unexpected return from RandomNumberService when asked for 0..1' + randomMultiplier);
    }

    const randomNumber = randomBase * randomMultiplier;

    return randomNumber;
  }

}
