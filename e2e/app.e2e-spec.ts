import { TestXPage } from './app.po';

describe('test-x App', () => {
  let page: TestXPage;

  beforeEach(() => {
    page = new TestXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
