import { styled, css } from '../create'

export const overlayCss = css({
  backgroundColor: '$overlay$bg',
  backdropFilter: '$overlay$backdropFilter',
})

export const Overlay = styled('div', overlayCss)
