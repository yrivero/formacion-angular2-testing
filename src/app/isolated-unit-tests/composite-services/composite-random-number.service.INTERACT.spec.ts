import {RandomNumberService} from "../standalone-services/random-number.service";
import {CompositeRandomNumberService} from "./composite-random-number.service";

import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

describe('CompositeRandomNumberService, interaction testing', () => {

  /*
     INPUT / OUTPUT TESTING
   */

  let random: RandomNumberService;
  let randomSpy: Spy;

  let composite: CompositeRandomNumberService;


  beforeEach(() => {
    random = new RandomNumberService();
    randomSpy = spyOn(random, 'getRandomNumber');

    composite = new CompositeRandomNumberService(random); }
  );


  it('Interaction: Composite should ask Random for a random between 0..1000 and for another 0..1', () => {
    composite.getRandomNumberFrom0To1000();

    expect(random.getRandomNumber).toHaveBeenCalledWith(0, 1000);
    expect(random.getRandomNumber).toHaveBeenCalledWith();
  });


  it('Stubbing and Interaction: Composite should fail if Random fails when asked for the first random number', () => {
    randomSpy.and.throwError('Random failure!');

    try {
      composite.getRandomNumberFrom0To1000();
      fail('Should have thrown an exception');
    } catch (e) {
      // Pass
    }
  });


  it('Stubbing and Interaction: Composite should fail if Random fails when asked for the second random number', () => {
    randomSpy.and.returnValue(500); // First random number
    randomSpy.and.throwError('Random failure!');

    try {
      composite.getRandomNumberFrom0To1000();
      fail('Should have thrown an exception');
    } catch (e) {
      // Pass
    }
  });


  it('Stubbing: Composite should fail if Random returns a wrong number when asked for 0..1000', () => {
    randomSpy.and.returnValue(1500); // Wrong range!

    try {
      composite.getRandomNumberFrom0To1000();
      fail('Should have thrown an exception');
    } catch (e) {
      // Pass
    }
  });


  it('Stubbing: Composite should fail if Random returns a wrong number when asked for 0..1', () => {
    randomSpy.and.returnValue(500); // Right range
    randomSpy.and.returnValue(-1); // Wrong range!

    try {
      composite.getRandomNumberFrom0To1000();
      fail('Should have thrown an exception');
    } catch (e) {
      // Pass
    }
  });


});
