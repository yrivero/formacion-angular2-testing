import {MultiplierButtonComponent} from "./multiplier-button.component";


describe('MultiplierButtonComponent, interaction based testing', () => {

  let button: MultiplierButtonComponent;

  let multipliedNumber: number;

  beforeEach(() => {
    button = new MultiplierButtonComponent();

    // When receiving the multiplied number, store the result in var "multipliedNumber"
    button.multiplied.subscribe(
      (theResult: number) => {
        multipliedNumber = theResult;
      }
    );

  });

  it('Should emit 0 when no number', () => {
    button.numberToMultiply = null;

    button.onClick();

    expect(multipliedNumber).toBe(0);
  });

  it('Should emit the number*1 when number but no factor', () => {
    button.numberToMultiply = 10;
    button.factor = null;

    button.onClick();

    expect(multipliedNumber).toBe(10);
  });

  it('Should emit the number*factor when number and factor', () => {
    button.numberToMultiply = 10;
    button.factor = 10;

    button.onClick();

    expect(multipliedNumber).toBe(100);
  });


});
