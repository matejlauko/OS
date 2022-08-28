import * as React from 'react'
import { styled, CSS } from '../create'
import * as SwitchPrimitive from '@radix-ui/react-switch'

const UISwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  position: 'relative',
  borderRadius: '$max',
  border: '1px solid $colors$border',
  width: '$switch$width',
  height: '$switch$height',
  backgroundColor: '$switch$bg',

  '&:focus-visible': { outline: '$colors$focus solid 2px' },
  '&[data-state="checked"]': { backgroundColor: '$accentSolid' },
})

const UIThumb = styled(SwitchPrimitive.Thumb, {
  $$size: 'calc($switch$height - 7px)',
  display: 'block',
  borderRadius: '$round',
  transition: 'transform 100ms',

  size: '$$size',
  backgroundColor: '$controlBg',
  boxShadow: `0 2px 2px $colors$grayA9`,
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: `translateX(calc($switch$width - $$size - 4px))` },
})

//-----//

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  css?: CSS
}

export const Switch = React.forwardRef<React.ElementRef<typeof UISwitch>, SwitchProps>(
  function Switch(props, forwardedRef) {
    return (
      <UISwitch {...props} ref={forwardedRef}>
        <UIThumb />
      </UISwitch>
    )
  }
)
