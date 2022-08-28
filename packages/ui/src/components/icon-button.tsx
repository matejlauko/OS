import {
  BaseButton,
  buttonVariants as buttonVariants,
  buttonCompoundVariants as buttonCompoundVariants,
} from './button'
import { styled } from '../create'
import * as React from 'react'

export const iconButtonVariants = {
  ...buttonVariants,
  size: {
    sm: {
      size: '$control_sm',
    },
    md: {
      size: '$control_md',
    },
    lg: {
      size: '$control_lg',
    },
    xl: {
      size: '$control_xl',
    },
  },
  active: {
    true: {},
  },
} as const

const defaultVariants = {
  size: 'md',
  variant: 'secondary',
  tone: 'neutral',
} as const

export const UIIconButton = styled(BaseButton, {
  flexShrink: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  borderRadius: '$button$borderRadius',
  color: '$icon',
  justifyContent: 'center',

  variants: iconButtonVariants,
  defaultVariants,
  compoundVariants: [...buttonCompoundVariants],
})

export const IconButton = React.forwardRef<
  React.ElementRef<typeof UIIconButton>,
  React.ComponentProps<typeof UIIconButton> & { as?: React.ElementType }
>(function IconButton({ size = defaultVariants.size, children, ...props }, forwardedRef) {
  if (!children || !React.isValidElement(children)) return null

  const iconSize = size === 'xl' ? 'lg' : size
  const iconChild = React.cloneElement(children, { color: 'blend', size: iconSize })

  return (
    <UIIconButton size={size} {...props} ref={forwardedRef}>
      {iconChild}
    </UIIconButton>
  )
})

export const LinkIconButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof IconButton> & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkIconButton(props, forwardedRef) {
  return <IconButton {...props} as="a" ref={forwardedRef as any} />
})
