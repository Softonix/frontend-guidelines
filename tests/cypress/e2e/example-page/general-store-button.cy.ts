/// <reference types="cypress" />
import { examplesPage } from '../../support'

describe('General store button', () => {
  beforeEach(() => {
    examplesPage.visitTheExamplesPage()
  })

  it('should increment the id value with each click', () => {
    examplesPage.interceptGetGeneralStoreRequest().as('firstRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('firstRequest').as('firstResponseId')

    examplesPage.assertTheValueInGeneralStoreText('firstResponseId')

    examplesPage.interceptGetGeneralStoreRequest().as('secondRequest')

    examplesPage.clickTheGeneralStoreButton()

    examplesPage.saveTheResponseId('secondRequest').as('secondResponseId')

    examplesPage.assertTheValueInGeneralStoreText('secondResponseId')

    examplesPage.assertTheRequestIDsAreDifferent('firstResponseId', 'secondResponseId')
  })
})
