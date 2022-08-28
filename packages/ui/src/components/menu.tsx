import * as MenuPrimitive from '@radix-ui/react-menu'
import { css, keyframes, styled } from '../create'
import { panelCss } from './panel'

const baseItemCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$2',
  lineHeight: '1',
  fontVariantNumeric: 'tabular-nums',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$control_sm',
  px: '$5',
})

export const itemCss = css(baseItemCss, {
  position: 'relative',
  color: '$text',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$accentSolid',
    color: 'white',
  },
  '&.focus-visible': {
    boxShadow: 'none',
  },

  '&[data-disabled]': {
    color: '$slate9',
  },
})

export const labelCss = css(baseItemCss, {
  color: '$text2',
})

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

export const separatorCss = css({
  height: 1,
  my: '$1',
  backgroundColor: '$line',
})

export const menuCss = css({
  minWidth: 200,
  py: '$1',
  px: '$1',

  '@motion': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const itemIconCss = css({
  position: 'absolute',
  left: 0,
  width: '$space$5',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$icon$color',

  '& > svg': {
    size: '$icon$sm_size',
  },

  ':focus > & svg': { color: '$white' },
  // '[data-disabled] &': { color: mauve.mauve8 },
})

export const Menu = styled(MenuPrimitive.Root, menuCss)
export const MenuContent = styled(MenuPrimitive.Content, panelCss)
export const MenuGroup = styled(MenuPrimitive.Group, {})
export const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss)
export const MenuItem = styled(MenuPrimitive.Item, itemCss)
export const MenuLabel = styled(MenuPrimitive.Label, labelCss)

export const MenuItemIcon = styled('div', itemIconCss)
