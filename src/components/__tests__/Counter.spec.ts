import { test } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/vue'
import Counter from '../Counter.vue'

// This is an simple example of testing a vue component. Try to write your own tests.
// Vitest docs https://vitest.dev/guide/
// Testing library docs 
// For mocking requests https://mswjs.io/docs/

test('increments value on click', async () => {
  render(Counter)

  // screen has all queries that you can use in your tests.
  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  screen.getByText('Times clicked: 0')

  const button = screen.getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  screen.getByText('Times clicked: 2')
})
