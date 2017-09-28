import { MonitoringDiabeticsUiPage } from './app.po';

describe('monitoring-diabetics-ui App', () => {
  let page: MonitoringDiabeticsUiPage;

  beforeEach(() => {
    page = new MonitoringDiabeticsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
