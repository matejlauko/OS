import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'
import { keyframes, styled, CSS } from '../create'
import { CloseIcon } from './icon'
import { IconButton } from './icon-button'

export const PopoverRoot = PopoverPrimitive.Root
export const PopoverPortal = PopoverPrimitive.Portal

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const UIContent = styled(PopoverPrimitive.Content, {
  borderRadius: '$lg',
  padding: '$5',
  minWidth: 260,
  backgroundColor: 'white',
  boxShadow: '$4',
  borderWidth: 1,
  borderColor: '$line',

  '@motion': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',

    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

const UIClose = styled(PopoverPrimitive.Close, {
  position: 'absolute',
  top: 5,
  right: 5,
})

// const UIArrow = styled(PopoverPrimitive.Arrow, {
//   fill: 'white',
//   border: '1px solid $colors$line',
// });

// const PopoverArrow = UIArrow;

const PopoverClose = () => (
  <UIClose aria-label="Close" asChild>
    <IconButton size="sm" variant="tertiary">
      <CloseIcon />
    </IconButton>
  </UIClose>
)

/* ========= */

export const Popover = PopoverRoot
export const PopoverTrigger = PopoverPrimitive.Trigger

type PopoverContentProps = React.PropsWithChildren<PopoverPrimitive.PopoverContentProps> & {
  withClose?: boolean
  css?: CSS
  // withArrow?: boolean;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  withClose = true,
  sideOffset = 5,
  // withArrow = true,
  ...props
}) => {
  return (
    <PopoverPortal>
      <UIContent sideOffset={sideOffset} {...props}>
        {children}

        {/* {withArrow && <PopoverArrow />} */}
        {withClose && <PopoverClose />}
      </UIContent>
    </PopoverPortal>
  )
}
