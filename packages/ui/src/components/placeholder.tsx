import * as React from 'react'
import { Box } from './layout'
import { keyframes, styled, CSS } from '../create'

type PlaceholderProps = {
  height?: number | string
  width?: number | string
  css?: CSS
}

export const Placeholder = React.forwardRef<
  React.ElementRef<typeof UIPlaceholder>,
  React.PropsWithChildren<PlaceholderProps>
>(function Placeholder({ width = '100%', height = '100%', css, children }, forwardedRef) {
  return (
    <UIPlaceholder css={{ width, height, ...(css as any) }} ref={forwardedRef}>
      {children}
    </UIPlaceholder>
  )
})

const placeHolderShimmer = keyframes({
  '0%': {
    backgroundPosition: '-468px 0',
  },
  '100%': {
    backgroundPosition: '468px 0',
  },
})

const UIPlaceholder = styled(Box, {
  position: 'relative',
  animationName: `${placeHolderShimmer}`,
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  background:
    'linear-gradient(to right, $colors$grayA7 8%, $colors$grayA5 18%, $colors$grayA7 33%)',
  backgroundSize: '936px 104px',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '$sm',
})
