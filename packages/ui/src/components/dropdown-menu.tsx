import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'
import { CSS, styled } from '../create'
import { itemCss, itemIconCss, labelCss, menuCss, separatorCss } from './menu'
import { panelCss } from './panel'

const DropdownMenuRoot = DropdownMenuPrimitive.Root
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, menuCss, panelCss)
const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$white',
})

type DropdownMenuProps = Pick<
  React.ComponentProps<typeof DropdownMenuRoot>,
  'defaultOpen' | 'open' | 'onOpenChange'
> &
  Pick<
    React.ComponentProps<typeof DropdownMenuContent>,
    'side' | 'sideOffset' | 'align' | 'alignOffset'
  > &
  Pick<React.ComponentProps<typeof DropdownMenuTrigger>, 'disabled'> & {
    children: React.ReactElement
    content: React.ComponentProps<typeof DropdownMenuContent>['children']
    hasArrow?: boolean
    css?: CSS
  }

export const DropdownMenu: React.FC<React.PropsWithChildren<DropdownMenuProps>> = ({
  content,
  defaultOpen,
  open,
  onOpenChange,
  disabled,
  css,
  side = 'bottom',
  sideOffset = 0,
  align = 'center',
  alignOffset = 0,
  hasArrow = false,
  children,
}) => {
  return (
    <DropdownMenuRoot defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild disabled={disabled}>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          css={css as any}
        >
          {hasArrow && <DropdownMenuArrow offset={5} width={11} height={5} />}

          {content}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  )
}

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss)
export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss)

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss)
export const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {})

export const DropdownMenuIcon = styled('div', itemIconCss)
