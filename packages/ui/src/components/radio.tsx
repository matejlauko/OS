import * as React from 'react'
import { css, styled, CSS } from '../create'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

const radioCss = css({
  backgroundColor: '$uibg',
  size: '$control_2xs',
  borderRadius: '$round',
  borderWidth: 1,
  borderColor: '$border',
  transition: 'background-color $appear_fast, border-color $appear_fast',

  '&:hover:not(:disabled)': { borderColor: '$border2', bg: '$uibg2' },

  '&:focus-visible': {
    outline: '$colors$focus solid 2px',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})

const UIRadio = styled(RadioGroupPrimitive.Item, radioCss)

const UIIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    size: 'calc($sizes$control_2xs / 2)',
    borderRadius: '$round',
    backgroundColor: '$accentSolid',
  },
})

const UIRadioWrap = styled('div', {
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
})

// Exports
export const RadioGroup = RadioGroupPrimitive.Root

type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  css?: CSS
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof UIRadio>,
  RadioGroupItemProps
>(function RadioGroupItem(props, forwardedRef) {
  return (
    <UIRadioWrap>
      <UIRadio {...props} ref={forwardedRef}>
        <UIIndicator />
      </UIRadio>
    </UIRadioWrap>
  )
})
