import { css, styled } from '../create'
import { textVariants } from './text'

export const headingVariants = {
  ...textVariants,
  variant: {},
} as const

export const baseHeadingCss = css({
  margin: 0,
  lineHeight: '$heading$lineHeight',
  fontWeight: '$heading$fontWeight',
  fontSize: '$5',
})

export const Heading = styled('h2', baseHeadingCss, {
  variants: headingVariants,
})
