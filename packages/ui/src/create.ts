import * as Stitches from '@matejlauko/stitches-react'
import { ConfigType } from '@matejlauko/stitches-react/types/config'
import { lightThemeTokens } from '@matejlauko/tokens'
import { defaultMedia } from './media'
import { utils } from './utils'

const Stitched = Stitches.createStitches({
  theme: lightThemeTokens,
  media: defaultMedia,
  utils,
  initTheme: false,
})

export let { css, globalCss, styled, keyframes, getCssText, config, theme, createTheme } = Stitched

export const createUI = (_theme = lightThemeTokens, _media = defaultMedia) => {
  const ui = Stitches.createStitches({
    theme: _theme,
    media: _media,
    utils,
    sheet: Stitched.sheet,
  })

  config = ui.config
  css = ui.css
  getCssText = ui.getCssText
  globalCss = ui.globalCss
  styled = ui.styled
  theme = ui.theme
  keyframes = ui.keyframes
  createTheme = ui.createTheme

  return ui
}

export type CSS = Stitches.CSS<typeof config>
export type ExactTheme = typeof theme
export type Theme = ConfigType.Theme<ExactTheme>
export type Color = keyof ExactTheme['colors']
