export function useForm () {
  function submitForm (validate: (valid: (valid: boolean) => boolean) => void) {
    return validate((isValid: boolean) => {
      if (isValid) {
        alert('Submit!')
        return true
      }

      return false
    })
  }

  function resetForm (callback: () => void) {
    callback()
  }

  return { submitForm, resetForm }
}
