import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'
import { CSS, css, styled } from '../create'
import { baseButtonCss } from './button'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from './icon'

const UITrigger = styled(SelectPrimitive.SelectTrigger, baseButtonCss, {
  borderRadius: '$c$select_trigger_radius',
  px: '$c$select_trigger_px',
  fontSize: '$c$select_trigger_fontSize',
  height: '$c$select_trigger_height',
  color: '$c$select_trigger_color',
  bg: '$elbg',
  '&:hover': { bg: '$elbg2' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const UIContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  bg: '$uibg',
  borderRadius: '$c$select_content_radius',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

const UISelectViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

const UIItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  // color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    // color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    // bg: violet.violet9,
    // color: violet.violet1,
  },
})

const UILabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  // color: mauve.mauve11,
})

const UISeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  // backgroundColor: violet.violet6,
  margin: 5,
})

const UISelectIcon = styled(SelectPrimitive.Icon, {
  ml: '$2',
})

const UIItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const scrollButtonStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  // color: violet.violet11,
  cursor: 'default',
})

const UIScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles)
const UIScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles)

const SelectItemText = SelectPrimitive.ItemText
const SelectValue = SelectPrimitive.Value

// Exports
export const Select = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectLabel = UILabel
export const SelectSeparator = UISeparator

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof UITrigger>,
  React.PropsWithChildren<{}>
>(function SelectTrigger({ children, ...props }, forwardedRef) {
  return (
    <UITrigger {...props} ref={forwardedRef}>
      <SelectValue>{children}</SelectValue>

      <UISelectIcon>
        <ChevronDownIcon />
      </UISelectIcon>
    </UITrigger>
  )
})

type SelectContentPrimitiveProps = React.ComponentProps<typeof SelectPrimitive.Content>
type SelectContentProps = SelectContentPrimitiveProps & { css?: CSS }

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof UIContent>,
  SelectContentProps
>(function SelectContent({ children, ...props }, forwardedRef) {
  return (
    <UIContent {...props} ref={forwardedRef}>
      <UIScrollUpButton>
        <ChevronUpIcon />
      </UIScrollUpButton>

      <UISelectViewport>{children}</UISelectViewport>

      <UIScrollDownButton>
        <ChevronDownIcon />
      </UIScrollDownButton>
    </UIContent>
  )
})

type SelectItemPrimitiveProps = React.ComponentProps<typeof SelectPrimitive.Item>
type SelectItemProps = SelectItemPrimitiveProps & { css?: CSS }

export const SelectItem = React.forwardRef<React.ElementRef<typeof UIItem>, SelectItemProps>(
  function SelectItem({ children, ...props }, forwardedRef) {
    return (
      <UIItem {...props} ref={forwardedRef}>
        <SelectItemText>{children}</SelectItemText>

        <UIItemIndicator>
          <CheckIcon />
        </UIItemIndicator>
      </UIItem>
    )
  }
)
