import { BandPage } from './app.po';

describe('band App', function() {
  let page: BandPage;

  beforeEach(() => {
    page = new BandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
