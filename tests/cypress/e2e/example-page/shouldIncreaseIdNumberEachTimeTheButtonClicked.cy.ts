import { examplesPage } from '../../support'

describe('Examples page', () => {
  beforeEach(() => {
    examplesPage.visitTheExamplesPage()
  })

  it('should increase the id value each time the [general store] button is clicked', () => {
    examplesPage.interceptGetGeneralStoreRequest('firstRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('firstRequest', 'firstRequestID')

    examplesPage.assertTheIdAppearedInTheGeneralStoreText('firstRequestID')

    examplesPage.interceptGetGeneralStoreRequest('secondRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('secondRequest', 'secondRequestID')

    examplesPage.assertTheIdAppearedInTheGeneralStoreText('secondRequestID')
  })
})
