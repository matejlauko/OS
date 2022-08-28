import * as React from 'react'
import { styled, keyframes } from '../create'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

type HoverCardProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof Content> & {
    children: React.ReactElement
    content: React.ReactNode
    hasArrow?: boolean
  }

export const HoverCard: React.FC<React.PropsWithChildren<HoverCardProps>> = ({
  content,

  defaultOpen,
  open,
  onOpenChange,
  openDelay,
  closeDelay,
  side = 'bottom',
  sideOffset = 0,
  align = 'center',
  alignOffset = 0,
  hasArrow = true,
  size,
  center,
  css,
  children,
}) => {
  if (!content) {
    return children
  }

  return (
    <Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <Trigger asChild>{children}</Trigger>

      <Content
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        size={size}
        center={center}
        css={css as any}
      >
        {content}

        {hasArrow && <Arrow />}
      </Content>
    </Root>
  )
}

const Root = HoverCardPrimitive.Root
const Trigger = HoverCardPrimitive.Trigger

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const Content = styled(HoverCardPrimitive.Content, {
  bg: '$white',
  borderRadius: '$lg',
  minHeight: 80,
  boxShadow: '$5',
  p: '$2',
  transformOrigin: 'var(--radix-hover-card-content-transform-origin)',
  animationDuration: '400ms',
  animationTimingFunction: 'ease-out',
  willChange: 'transform, opacity',

  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
  },

  variants: {
    size: {
      sm: {
        width: '$popover_sm',
      },
      md: {
        width: '$popover_md',
      },
    },
    center: {
      true: {
        display: 'grid',
        placeItems: 'center',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Arrow = styled(HoverCardPrimitive.Arrow, {
  fill: '$white',
})
