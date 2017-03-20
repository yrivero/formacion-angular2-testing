import { FormacionAngular2TestingPage } from './app.po';

describe('formacion-angular2-testing App', () => {
  let page: FormacionAngular2TestingPage;

  beforeEach(() => {
    page = new FormacionAngular2TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
