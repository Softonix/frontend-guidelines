import DateTimeFormatOptions = Intl.DateTimeFormatOptions

export const filters = {
  date (
    value: any,
    options?: DateTimeFormatOptions
  ) {
    const date = new Date(value || '')
    return {
      default: value ? date.toLocaleString('en-US', {
        weekday: 'short',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }) : '',
      full: value ? date.toLocaleString('en-US', {
        weekday: 'short',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        minute: 'numeric',
        hour: 'numeric',
        hour12: true
      }) : '',
      custom: value ? date.toLocaleString('en-US', options) : ''
    }
  }
}
