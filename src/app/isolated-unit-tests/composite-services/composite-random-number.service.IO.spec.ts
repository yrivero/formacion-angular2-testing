import {RandomNumberService} from "../standalone-services/random-number.service";
import {CompositeRandomNumberService} from "./composite-random-number.service";

describe('CompositeRandomNumberService, I/O testing', () => {

  /*
     INPUT / OUTPUT TESTING
   */

  let random: RandomNumberService;
  let composite: CompositeRandomNumberService;

  beforeEach(() => {
    random = new RandomNumberService();
    composite = new CompositeRandomNumberService(random); }
  );


  it('The random number should be always between 0 and 1000', () => {
    const randomNumber = composite.getRandomNumberFrom0To1000();

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1000);
  });

});
