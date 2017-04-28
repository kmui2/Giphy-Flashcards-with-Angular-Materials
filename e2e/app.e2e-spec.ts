import { Material2SamplePage } from './app.po';

describe('material2-sample App', () => {
  let page: Material2SamplePage;

  beforeEach(() => {
    page = new Material2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
