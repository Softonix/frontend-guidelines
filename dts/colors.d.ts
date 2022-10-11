declare module 'colors' {
  type TTWColor = Record<'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>

  const colors = {
    white: {} as TTWColor,
    gray: {} as TTWColor,
    red: {} as TTWColor,
    green: {} as TTWColor,
    orange: {} as TTWColor,
    primary: string,
    success: string,
    warning: string,
    danger: string
  }

  export = colors
}