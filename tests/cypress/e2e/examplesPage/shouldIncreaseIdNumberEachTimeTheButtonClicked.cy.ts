import { examplesPage } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/examplesPageObject';

describe('Examples page', () => {
  beforeEach(() => {
    examplesPage.visitTheExamplesPage();
  });

    it('should increase the id value each time the [general store] button is clicked', () => {
        examplesPage.interceptGetGeneralStoreRequest('firstRequest');

        examplesPage.clickTheGeneralStoreButton();

        examplesPage.saveTheResposeId('firstRequest', 'firstRequestID');

        examplesPage.assertTheIdAppearedInTheGeneralStoreText('firstRequestID');


        examplesPage.interceptGetGeneralStoreRequest('secondRequest');

        examplesPage.clickTheGeneralStoreButton();

        examplesPage.saveTheResposeId('secondRequest', 'secondRequestID');

        examplesPage.assertTheIdAppearedInTheGeneralStoreText('secondRequestID');
    });
  });
  