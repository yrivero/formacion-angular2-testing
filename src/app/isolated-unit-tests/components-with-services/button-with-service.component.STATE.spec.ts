import { ButtonWithServiceComponent } from './button-with-service.component';
import { RandomNumberService } from '../standalone-services/random-number.service';


describe('ButtonWithServiceComponent, state based testing', () => {

  let numberToServe: number = null;
  let shouldThrowAnError: boolean = null;

  /* Mock implementation */
  const mockRandom: RandomNumberService = {
    getRandomNumber(min?: number, max?: number): number {
      if (shouldThrowAnError) {
        throw new Error('I was asked to throw an error...');
      } else {
        return numberToServe;
      }
    }
  };

  let button: ButtonWithServiceComponent;

  beforeEach(() => {
    button = new ButtonWithServiceComponent(mockRandom);
    shouldThrowAnError = null;
    numberToServe = null;
  });

  /*
      STATE BASED TESTING
   */

  it('Should initially show no number', () => {
    expect(button.theNumber).toBe(null);
  });


  it('Should show a number after one click', () => {
    expect(button.theNumber).toBe(null);

    shouldThrowAnError = false;
    numberToServe = 0.5;
    button.onClick();

    expect(button.theNumber).toBe(numberToServe);
  });


  it('Should show a different number after one click', () => {
    expect(button.theNumber).toBe(null);

    shouldThrowAnError = false;
    numberToServe = 0.5;
    button.onClick();

    expect(button.theNumber).toBe(numberToServe);

    shouldThrowAnError = false;
    numberToServe = 0.75;
    button.onClick();

    expect(button.theNumber).toBe(numberToServe);
  });

  it('Should be empty when an error happens', () => {
    expect(button.theNumber).toBe(null);

    shouldThrowAnError = false;
    numberToServe = 0.5;
    button.onClick();

    // Showing the number
    expect(button.theNumber).toBe(numberToServe);

    shouldThrowAnError = true;
    button.onClick();

    // Not showing any number
    expect(button.theNumber).toBe(null);
  });



});
