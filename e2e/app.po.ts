export class Material2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('material2-app-app h1')).getText();
  }
}
