import { merge } from '@matejlauko/utils'

export const baseTokens = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    0: '11px',
    1: '12px',
    2: '13px',
    3: '14px',
    4: '15px',
    5: '16px',
    6: '18px',
    7: '20px',
    8: '24px',
    9: '28px',
    10: '32px',

    base: '$fontSizes$3',
  },
  lineHeights: {
    xs: 1.1,
    sm: 1.2,
    md: 1.5,
    lg: 1.7,
    body: 1.5,
  },
  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
  space: {
    '0_5': '2px',
    1: '4px',
    '1_5': '6px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    18: '72px',
    20: '80px',
    24: '96px',
    28: '112px',
  },
  sizes: {
    control_3xs: '16px',
    control_2xs: '20px',
    control_xs: '24px',
    control_sm: '28px',
    control_md: '36px',
    control_lg: '40px',
    control_xl: '48px',
    control_xxl: '64px',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '10px',
    round: '50%',
    max: '9909px',
  },
  shadows: {
    outline: '0 0 0 2px $colors$focus',

    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    3: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    4: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    5: '0px 10px 38px -10px rgba(0, 0, 0, 0.35), 0px 10px 20px -15px rgba(0, 0, 24, 0.2)',
  },
  zIndices: {
    under: 0,
    base: 1,
    search: 3,
    highlight: 11,
    fixedBox: 100,
    nav: 200,
    dialogOverlay: 300,
    dialog: 301,
    splash: 500,
  },
  transitions: {
    appear_fast: '.15s cubic-bezier(0, 0, 0.40, 1)', // ease-out
    appear_slow: '0.3s cubic-bezier(0, 0, 0.40, 1)', // ease-out
    out_fast: '0.15s cubic-bezier(0.50, 0, 1, 1)', // ease-in
    out_slow: '0.3s cubic-bezier(0.50, 0, 1, 1)', // ease-in
    move_fast: '0.15s cubic-bezier(0.45, 0, 0.40, 1)', // ease-in-out
    move_slow: '0.3s cubic-bezier(0.45, 0, 0.40, 1)', // ease-in-out
  },
}

export const createBaseTokens = (customTokens?: RecursivePartialIndexed<typeof baseTokens>) =>
  merge({}, baseTokens, customTokens)
