import { createBaseTokens } from './base'
import { baseDarkColors, baseLightColors, darkColors, lightColors, semanticColors } from './colors'
import { createComponentTokens } from './components'
import { merge } from '@matejlauko/utils'

const commonTokens = {
  colors: semanticColors,
  ...createBaseTokens(),
  ...createComponentTokens(),
}

export const lightThemeTokens = merge(
  {},
  { colors: baseLightColors },
  { colors: lightColors },
  commonTokens
)

export const darkThemeTokens = merge(
  {},
  { colors: baseDarkColors },
  { colors: darkColors },
  commonTokens
)

export * from './base'
export * from './colors'
export * from './components'

export { palette } from './colors'
