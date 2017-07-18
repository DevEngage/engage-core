import { EngageCorePage } from './app.po';

describe('engage-core App', () => {
  let page: EngageCorePage;

  beforeEach(() => {
    page = new EngageCorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
