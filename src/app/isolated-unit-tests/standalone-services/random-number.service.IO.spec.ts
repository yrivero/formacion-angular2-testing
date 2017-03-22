
import {RandomNumberService} from "./random-number.service";

describe('RandomNumberService, I/O testing', () => {

  let service: RandomNumberService;

  beforeEach(() => {
    service = new RandomNumberService(); }
  );


  /*
      INPUT / OUTPUT TESTING
   */

  it('With no args, should return number between 0 and 1', () => {
    const randomNumber = service.getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });

  it('With no min and having max, should be less or equal than max', () => {
    const randomNumber = service.getRandomNumber(null, 10);

    expect(randomNumber).toBeLessThanOrEqual(10);
  });


  it('With min and no max, should be greater or equal than min', () => {
    const randomNumber = service.getRandomNumber(0);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
  });


  it('With min and max, should be between both', () => {
    const randomNumber = service.getRandomNumber(0, 10);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });


});
