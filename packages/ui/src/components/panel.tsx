import { css, styled } from '../create'

export const panelCss = css({
  backgroundColor: '$panel$bg',
  borderRadius: '$panel$borderRadius',
  boxShadow: '$panel$boxShadow',
  backdropFilter: '$panel$backdropFilter',
  borderWidth: 1,
  borderColor: '$line',
})

export const Panel = styled('div', panelCss)
