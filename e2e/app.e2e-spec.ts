import { Session6Assignment1Page } from './app.po';

describe('session6-assignment1 App', () => {
  let page: Session6Assignment1Page;

  beforeEach(() => {
    page = new Session6Assignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
