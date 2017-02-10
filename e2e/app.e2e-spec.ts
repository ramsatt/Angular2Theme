import { MCMPage } from './app.po';

describe('mcm App', function() {
  let page: MCMPage;

  beforeEach(() => {
    page = new MCMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
