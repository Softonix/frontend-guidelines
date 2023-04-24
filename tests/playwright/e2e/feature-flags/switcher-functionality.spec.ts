import { test } from '@playwright/test'
import { FeatureFlag, LoginPage } from '../../pages'

test('Flag switcher should turn On and Off the Feature flag if clicking', async ({ page, context }) => {
  const featureFlagPage = new FeatureFlag(page)
  const loginPageTab = new LoginPage(await context.newPage())

  await featureFlagPage.visitTheFeatureFlagPage()

  await featureFlagPage.assertTheFirstFlagDisabled()

  await featureFlagPage.clickTheFirstFF()

  await featureFlagPage.saveTheFeatureFlagValue()

  await featureFlagPage.assertTheFlagInLocalStorage()

  await loginPageTab.visitTheLoginPage()

  await loginPageTab.assertTheFFlagButtonVisible()

  await featureFlagPage.page.reload()

  await featureFlagPage.assertTheFlagInLocalStorage()

  await featureFlagPage.clickTheFirstFF()

  await featureFlagPage.assertTheFlagNotInStorage()

  await loginPageTab.page.reload()

  await loginPageTab.assertFFlagButtonNotVisible()
})
