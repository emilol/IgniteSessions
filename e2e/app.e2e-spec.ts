import { IgniteSessionsPage } from './app.po';

describe('ignite-sessions App', function() {
  let page: IgniteSessionsPage;

  beforeEach(() => {
    page = new IgniteSessionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
