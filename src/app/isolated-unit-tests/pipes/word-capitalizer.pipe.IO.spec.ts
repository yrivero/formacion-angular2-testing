
import {WordCapitalizerPipe} from './word-capitalizer.pipe';

describe('WordCapitalizerPipe, I/O testing', () => {

  /*
     INPUT / OUTPUT TESTING
   */

  let pipe: WordCapitalizerPipe;

  beforeEach(() => {
    pipe = new WordCapitalizerPipe();
  });


  it('Should return empty string when null input', () => {
    const result: String = pipe.transform(null);

    expect(result).toBe('');
  });


  it('Should return empty string when no input', () => {
    const result: String = pipe.transform('');

    expect(result).toBe('');
  });


  it('Should return empty string when no input', () => {
    const result: String = pipe.transform('');

    expect(result).toBe('');
  });


  it('Should return capitalized words with non empty string', () => {
    const result: String = pipe.transform('the strange case of the dog at midnight');

    expect(result).toBe('The Strange Case Of The Dog At Midnight');
  });

});
