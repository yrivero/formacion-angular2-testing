import {StandaloneButtonComponent} from './standalone-button.component';


describe('StandaloneButtonComponent, state based testing', () => {

  let button: StandaloneButtonComponent;

  beforeEach(() => {
    button = new StandaloneButtonComponent();
  });


  /*
      STATE BASED TESTING
   */

  it('Should initially be off', () => {
    expect(button.isOn).toBe(false);
  });


  it('After one click it should be on', () => {
    expect(button.isOn).toBe(false);

    button.clicked();

    expect(button.isOn).toBe(true);
  });


  it('After two clicks it should be off again', () => {
    expect(button.isOn).toBe(false);

    button.clicked();

    expect(button.isOn).toBe(true);

    button.clicked();

    expect(button.isOn).toBe(false);
  });


});
