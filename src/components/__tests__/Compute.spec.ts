import { it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import Compute from '../Compute.vue'

it('should check slots', () => {
  // this test is an example for unit testing slots
  const slotContent = 'This is the slot content'
  const { getByText } = render(Compute, {
    slots: {
      default: slotContent
    }
  })

  const expectedSlot = getByText(slotContent)

  expect(expectedSlot).not.toBeNull()
})
