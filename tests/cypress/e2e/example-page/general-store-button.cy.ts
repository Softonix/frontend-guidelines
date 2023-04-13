import { examplesPage } from '../../support'

describe('General store button', () => {
  beforeEach(() => {
    examplesPage.visitTheExamplesPage()
  })

  it('should increment the id value with each click', () => {
    examplesPage.interceptGetGeneralStoreRequest('firstRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('firstRequest', 'firstRequestID')

    examplesPage.assertTheIdAppearedInTheGeneralStoreText('firstRequestID')

    examplesPage.interceptGetGeneralStoreRequest('secondRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('secondRequest', 'secondRequestID')

    examplesPage.assertTheIdAppearedInTheGeneralStoreText('secondRequestID')

    examplesPage.assertTheRequestIDsAreDifferent()
  })
})
