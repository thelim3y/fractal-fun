import { FractalfunPage } from './app.po';

describe('fractalfun App', () => {
  let page: FractalfunPage;

  beforeEach(() => {
    page = new FractalfunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
