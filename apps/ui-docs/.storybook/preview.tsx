import { DecoratorFn } from '@storybook/react'
import * as React from 'react'
import { baseDarkColors, baseLightColors, darkThemeTokens } from '@matejlauko/tokens'
import { UIProvider, createUI, globalStyles, globalCss, resetStyles } from '@matejlauko/ui'

createUI(darkThemeTokens)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' },
      { name: 'light', value: baseLightColors.gray3 },
      { name: 'light-uibg', value: baseLightColors.white },
      { name: 'dark', value: baseDarkColors.gray1 },
      { name: 'dark-uibg', value: baseDarkColors.gray2 },
    ],
  },
}

const applyResetStyles = globalCss(resetStyles)
const applyGlobalStyles = globalCss(globalStyles)

const withGlobalStyles: DecoratorFn = (Story, context) => {
  applyResetStyles()
  applyGlobalStyles()

  return (
    <UIProvider>
      <Story {...context} />
    </UIProvider>
  )
}

export const decorators = [withGlobalStyles]
