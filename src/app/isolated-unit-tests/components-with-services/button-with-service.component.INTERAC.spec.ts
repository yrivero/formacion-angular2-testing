import { ButtonWithServiceComponent } from './button-with-service.component';
import { RandomNumberService } from '../standalone-services/random-number.service';
import Spy = jasmine.Spy;


describe('ButtonWithServiceComponent, interaction based testing', () => {

  /* Mock implementation */
  const mockRandom: RandomNumberService = {
    getRandomNumber(min?: number, max?: number): number {
      throw new Error("This operation should have been mocked!");
    }
  };

  let mockRandomSpy: Spy = null;

  let button: ButtonWithServiceComponent;

  beforeEach(() => {
    button = new ButtonWithServiceComponent(mockRandom);
    mockRandomSpy = spyOn(mockRandom, "getRandomNumber");
  });



  it('Should not call Random until button clicked', () => {
    expect(mockRandomSpy.calls.count()).toBe(0);
  });


  it('Should call Random when button is clicked', () => {
    button.onClick();
    expect(mockRandomSpy.calls.count()).toBe(1);
  });


  it('Should not fail when clicked if Random fails', () => {
    mockRandomSpy.and.throwError("Premeditated error!");

    button.onClick();

    expect(mockRandomSpy.calls.count()).toBe(1);
  });

});
