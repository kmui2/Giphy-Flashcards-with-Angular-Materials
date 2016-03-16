import { Material2AppPage } from './app.po';

describe('material2-app App', function() {
  let page: Material2AppPage;

  beforeEach(() => {
    page = new Material2AppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('material2-app Works!');
  });
});
