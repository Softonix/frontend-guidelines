import { it } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import Counter from '../Counter.vue'

it('should increments value on click', async () => {
  const { getByText } = render(Counter)

  // screen has all queries that you can use in your tests.
  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0')

  const button = getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})
