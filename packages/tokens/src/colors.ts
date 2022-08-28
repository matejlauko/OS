import * as RadixColors from '@radix-ui/colors'

const {
  slate,
  slateDark,
  slateA,
  slateDarkA,
  indigo,
  indigoDark,
  indigoA,
  indigoDarkA,
  red,
  redDark,
  green,
  greenDark,
} = RadixColors

export const baseLightColors = {
  white: '#FFF',
  black: slate.slate12,

  gray12: slate.slate12,
  gray11: slate.slate11,
  gray10: slate.slate10,
  gray9: slate.slate9,
  gray8: slate.slate8,
  gray7: slate.slate7,
  gray6: slate.slate6,
  gray5: slate.slate5,
  gray4: slate.slate4,
  gray3: slate.slate3,
  gray2: slate.slate2,
  gray1: slate.slate1,

  grayA12: slateA.slateA12, // black
  grayA11: slateA.slateA11,
  grayA10: slateA.slateA10,
  grayA9: slateA.slateA9,
  grayA8: slateA.slateA8,
  grayA7: slateA.slateA7,
  grayA6: slateA.slateA6,
  grayA5: slateA.slateA5,
  grayA4: slateA.slateA4,
  grayA3: slateA.slateA3,
  grayA2: slateA.slateA2,
  grayA1: slateA.slateA1, // almost white

  accent12: indigo.indigo12,
  accent11: indigo.indigo11,
  accent10: indigo.indigo10,
  accent9: indigo.indigo9,
  accent8: indigo.indigo8,
  accent7: indigo.indigo7,
  accent6: indigo.indigo6,
  accent5: indigo.indigo5,
  accent4: indigo.indigo4,
  accent3: indigo.indigo3,
  accent2: indigo.indigo2,
  accent1: indigo.indigo1,

  accentA5: indigoA.indigoA5,
  accentA8: indigoA.indigoA8,

  red1: red.red1,
  red2: red.red2,
  red3: red.red3,
  red4: red.red4,
  red5: red.red5,
  red6: red.red6,
  red7: red.red7,
  red8: red.red8,
  red9: red.red9,
  red10: red.red10,
  red11: red.red11,

  green1: green.green1,
  green2: green.green2,
  green3: green.green3,
  green4: green.green4,
  green5: green.green5,
  green6: green.green6,
  green7: green.green7,
  green8: green.green8,
  green9: green.green9,
  green10: green.green10,
  green11: green.green11,
}

export const baseDarkColors = {
  white: '#FFF',
  black: slateDark.slate1,

  gray12: slateDark.slate12,
  gray11: slateDark.slate11,
  gray10: slateDark.slate10,
  gray9: slateDark.slate9,
  gray8: slateDark.slate8,
  gray7: slateDark.slate7,
  gray6: slateDark.slate6,
  gray5: slateDark.slate5,
  gray4: slateDark.slate4,
  gray3: slateDark.slate3,
  gray2: slateDark.slate2,
  gray1: slateDark.slate1,

  grayA12: slateDarkA.slateA12, // almost white
  grayA11: slateDarkA.slateA11,
  grayA10: slateDarkA.slateA10,
  grayA9: slateDarkA.slateA9,
  grayA8: slateDarkA.slateA8,
  grayA7: slateDarkA.slateA7,
  grayA6: slateDarkA.slateA6,
  grayA5: slateDarkA.slateA5,
  grayA4: slateDarkA.slateA4,
  grayA3: slateDarkA.slateA3,
  grayA2: slateDarkA.slateA2,
  grayA1: slateDarkA.slateA1,

  accent12: indigoDark.indigo12,
  accent11: indigoDark.indigo11,
  accent10: indigoDark.indigo10,
  accent9: indigoDark.indigo9,
  accent8: indigoDark.indigo8,
  accent7: indigoDark.indigo7,
  accent6: indigoDark.indigo6,
  accent5: indigoDark.indigo5,
  accent4: indigoDark.indigo4,
  accent3: indigoDark.indigo3,
  accent2: indigoDark.indigo2,
  accent1: indigoDark.indigo1,

  accentA5: indigoDarkA.indigoA5,
  accentA8: indigoDarkA.indigoA8,

  red1: redDark.red1,
  red2: redDark.red2,
  red3: redDark.red3,
  red4: redDark.red4,
  red5: redDark.red5,
  red6: redDark.red6,
  red7: redDark.red7,
  red8: redDark.red8,
  red9: redDark.red9,
  red10: redDark.red10,
  red11: redDark.red11,

  green1: greenDark.green1,
  green2: greenDark.green2,
  green3: greenDark.green3,
  green4: greenDark.green4,
  green5: greenDark.green5,
  green6: greenDark.green6,
  green7: greenDark.green7,
  green8: greenDark.green8,
  green9: greenDark.green9,
  green10: greenDark.green10,
  green11: greenDark.green11,
}

export const lightColors = {
  hiContrast: '$black',
  loContrast: '$white',

  bodyBg: '$uibg4',

  uibg: '$white',
  uibg2: '$gray1',
  uibg3: '$gray2',
  uibg4: '$gray3',
  uibg5: '$gray4',
  uibg6: '$gray5',

  elbg: '$gray3',
  elbg2: '$gray4',
  elbg3: '$gray5',
  line: '$gray6',
  border: '$gray7',
  border2: '$gray8',
  border0: '$gray1',

  elbgA: '$grayA2',
  elbgA2: '$grayA3',
  elbgA3: '$grayA4',

  text: '$hiContrast',
  text2: '$gray11',
  text3: '$gray10',
  text4: '$gray9',
  textContrast: '$loContrast',
}

export const darkColors = {
  hiContrast: '$white',
  loContrast: '$black',

  bodyBg: '$gray1',

  uibg: '$gray2',
  uibg2: '$gray3',
  uibg3: '$gray4',
  uibg4: '$gray5',
  uibg5: '$gray6',
  uibg6: '$gray7',

  elbg: '$gray3',
  elbg2: '$gray4',
  elbg3: '$gray5',
  line: '$gray6',
  border0: '$gray6',
  border: '$gray7',
  border2: '$gray8',

  elbgA: '$grayA2',
  elbgA2: '$grayA4',
  elbgA3: '$grayA5',

  solid: '$hiContrast',
  solid2: '$gray12',
  solid3: '$gray11',

  text: '$hiContrast',
  text2: '$gray12',
  text3: '$gray11',
  text4: '$gray10',
  textContrast: '$loContrast',
}

export const semanticColors = {
  mutedText: '$text2',
  inactiveText: '$text2',

  icon: '$gray9',
  icon2: '$gray10',
  icon3: '$gray11',

  focus: '$accentA8',

  accentText: '$accent11',
  accentText2: '$accent10',
  accentHeading: '$accent12',
  accentLine: '$accent6',
  accentBorder: '$accent7',
  accentBorder2: '$accent8',
  accentSolid: '$accent9',
  accentSolid2: '$accent10',
  accentSolid3: '$accent11',
  accentElbg: '$accent3',
  accentElbg2: '$accent4',
  accentElbg3: '$accent5',

  controlBg: '$uibg',

  // ACTIONS
  errorText: '$red11',
  errorBorder: '$red7',

  destroyElbg: '$red3',
  destroyElbg2: '$red4',
  destroyElbg3: '$red5',
  destroyBorder: '$red7',
  destroyBorder2: '$red8',
  destroySolid: '$red9',
  destroySolid2: '$red10',
  destroySolid3: '$red11',
  destroyText: '$red11',
  destroyText2: '$red10',

  successText: '$green11',
  successBorder: '$green7',

  confirmElbg: '$green3',
  confirmElbg2: '$green4',
  confirmElbg3: '$green5',
  confirmBorder: '$green7',
  confirmBorder2: '$green8',
  confirmSolid: '$green9',
  confirmSolid2: '$green10',
  confirmSolid3: '$green11',
  confirmText: '$green11',
  confirmText2: '$green10',
}

export const palette = RadixColors
