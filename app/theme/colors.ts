import palette from "./palette";

export default {
    ...palette,
    white: '#fff',
    mainBackground: '#f8f8fb',
    cardPrimaryBackground: palette.black,
    secondary: palette.secondary,
    activeTintColor: palette.primary,
    lightGray: '#878b9f',
    bitterSweetColor:'#f8817d',
    gradientPrimary: palette.gradient.primary,
    gradientNormal: palette.gradient.normal,
    gradientContact: palette.gradient.start,
    gradient: {
      primary: ['#e12e6f', '#e12e6f'],
      secondary: ['#0d1c33', '#0d1c33'],
      tertiary: ['#ffffff', '#9f9f9f'],
      fourth: ['#061b44', '#0d1c33'],
      disabled: ['#e4e8ee', '#e4e8ee'],
      white: ['#ffffff', '#ffffff'],
      gray: ['#d1d1d1', '#d1d1d1'],
      whiteGradient: ['#efefef', '#d1d1d1', '#e3e3e3'],
    },
  }