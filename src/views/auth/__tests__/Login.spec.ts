import { it, describe, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/vue'
import { faker } from '@faker-js/faker'
import { i18n } from '@/plugins'
import { routeNames } from '@/router/route-names'
import Login from '../Login.vue'

const mockRouter = { push: vi.fn() }
const mockRoute = { name: routeNames.rootPage }

beforeEach(() => {
  render(Login, {
    global: {
      plugins: [i18n],
      mocks: {
        $routeNames: routeNames,
        $route: mockRoute,
        $router: mockRouter
      }
    }
  })
})

afterEach(() => {
  cleanup()
})

describe('Login component', () => {
  describe('login flow tests', () => {
    it('should validate required fields', async () => {
      const submitButton = screen.getByTestId('loginBtn')

      await fireEvent.click(submitButton)

      await waitFor(() => {
        const emailError = screen.queryByText('Required field', { selector: 'div' })
        const passError = screen.queryByText('Required field', { selector: 'div' })

        expect(emailError).not.toBeNull()
        expect(passError).not.toBeNull()
      })
    })
  })

  describe('check email field validations', () => {
    it('should validate email field', async () => {
      const emailField = screen.getByLabelText('Email') as HTMLInputElement

      const testEmail = faker.internet.email()

      await fireEvent.update(emailField, testEmail)

      await waitFor(() => {
        expect(emailField.value).toBe(testEmail)
      })
    })

    it('should show an error message if invalid email provided', async () => {
      const emailField = screen.queryByLabelText('Email') as HTMLInputElement
      const invalidEmail = 'invalid'
      const errorMessage = 'Invalid email'

      await fireEvent.update(emailField, invalidEmail)

      await waitFor(() => {
        const emailError = screen.findByText(errorMessage, { selector: 'div' })
        expect(emailError).not.toBeNull()
      })
    })
  })

  describe('check password field validations', () => {
    it('should validate password field', async () => {
      const emailField = screen.getByLabelText('Password') as HTMLInputElement

      const testEmail = faker.internet.password()

      await fireEvent.update(emailField, testEmail)

      await waitFor(() => {
        expect(emailField.value).toBe(testEmail)
      })
    })

    it('should show an error message if invalid password provided', async () => {
      const passwordField = screen.queryByLabelText('Password') as HTMLInputElement
      const invalidPassword = 'sdc'
      const errorMessage = 'Min length 5'

      await fireEvent.update(passwordField, invalidPassword)

      await waitFor(() => {
        const emailError = screen.findByText(errorMessage, { selector: 'div' })
        expect(emailError).not.toBeNull()
      })
    })
  })

  describe('check form buttons', () => {
    it('should reset form fields by clicking on reset button', async () => {
      const emailField = screen.getByLabelText('Email') as HTMLInputElement
      const passwordField = screen.getByLabelText('Password') as HTMLInputElement
      const resetButton = screen.getByTestId('resetBtn')

      const fakeEmail = faker.internet.email()
      const fakePassword = faker.internet.password()

      await fireEvent.update(emailField, fakeEmail)
      await fireEvent.update(passwordField, fakePassword)
      await fireEvent.click(resetButton)

      await waitFor(() => {
        expect(emailField.value).toBe('')
        expect(passwordField.value).toBe('')
      })
    })

    it('should back to the main page when back button was clicked', async () => {
      const backButton = screen.getByTestId('backToHomeBtn')

      await fireEvent.click(backButton)

      expect(mockRouter.push).toHaveBeenCalledOnce()
      expect(mockRouter.push).toHaveBeenCalledWith({ name: routeNames.rootPage })
    })
  })
})
