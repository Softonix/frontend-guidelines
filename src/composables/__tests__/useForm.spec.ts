import { it, expect, describe } from 'vitest'
import { useForm } from '../useForm'

describe('useForm', () => {
  it('should return true when validation is successful', () => {
    // Arrange
    const { submitForm } = useForm()

    // Act
    const result = submitForm(() => {
      // Simulate a valid scenario
      return true
    })

    // Assert
    expect(result).toBe(true)
  })

  it('should return false when validation fails', () => {
    // Arrange
    const { submitForm } = useForm()

    // Act
    const result = submitForm(() => {
      // Simulate an invalid scenario
      return false
    })

    // Assert
    expect(result).toBe(false)
  })
})
