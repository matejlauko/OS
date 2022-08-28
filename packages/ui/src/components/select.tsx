import * as React from 'react'
import { styled, CSS, css } from '../create'
import { ChevronDownIcon } from './icon'

export const resetSelectCss = css({
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
})

export const baseSelectCss = css(resetSelectCss, {
  borderRadius: 'inherit',
  color: 'inherit',
  font: 'inherit',
  outline: 'none',
  width: '100%',
  height: '100%',
  lineHeight: 1,
})

export const BaseSelect = styled('select', baseSelectCss)

const SelectWrapper = styled('div', {
  position: 'relative',
  flexShrink: 0,
  fontVariantNumeric: 'tabular-nums',

  backgroundColor: '$controlBg',
  fontWeight: '$normal',
  borderColor: '$border',
  borderRadius: '$button$borderRadius',
  color: '$select$trigger_color',
  fontSize: '$select$trigger_fontSize',
  height: '$select$trigger_height',
  borderWidth: '$select$trigger_borderWidth',

  '&:hover': {
    bg: '$uibg2',
    borderColor: '$border2',
  },

  '&:focus-within': {
    zIndex: 1,
    bg: '$uibg2',
    borderColor: '$focus',
  },
})

const UISelect = styled(BaseSelect, {
  pl: '$2',
  pr: '$8',
})

const UIIcon = styled(ChevronDownIcon, {
  position: 'absolute',
  pointerEvents: 'none',
  display: 'inline',
  top: '50%',
  right: '$1',
  transform: 'translateY(-50%)',
})

type SelectProps = React.ComponentProps<typeof UISelect> & {
  css?: CSS
  onValueChange?: (value: string) => void
}

export const Select = React.forwardRef<React.ElementRef<typeof UISelect>, SelectProps>(
  function Select({ css, onChange, onValueChange, ...props }, forwardedRef) {
    const handleChange = (event: React.ChangeEvent<React.ElementRef<typeof UISelect>>) => {
      onChange?.(event)
      onValueChange?.(event.target.value)
    }

    return (
      <SelectWrapper css={css}>
        <UISelect ref={forwardedRef} onChange={handleChange} {...props} />

        <UIIcon />
      </SelectWrapper>
    )
  }
)

Select.toString = () => `.${SelectWrapper.className}`
