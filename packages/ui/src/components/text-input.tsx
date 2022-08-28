import * as React from 'react'
import { css, styled } from '../create'

export const resetInputCss = css({
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  background: 'transparent',
  margin: 0,
  padding: 0,
  fontFamily: 'inherit',
  minWidth: 0,
  display: 'block',
})

export const baseTextInputCss = css(resetInputCss, {
  lineHeight: 1,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  transition: 'background-color $appear_fast, border-color $appear_fast',
  outline: 'none',

  '&:disabled': {
    cursor: 'default',
    resize: 'none',
    opacity: '$input$disabled_opacity',
  },
})

export const textInputVariants = {
  variant: {
    outline: {
      bg: '$controlBg',
      borderColor: '$border',

      '&:hover': {
        bg: '$uibg2',
        borderColor: '$border2',
      },
      '&:focus': {
        bg: '$uibg2',
        borderColor: '$focus',
      },
    },
    ghost: {
      borderColor: 'transparent',
      bg: '$elbg',

      '&:hover': {
        bg: '$elbg2',
      },
      '&:focus': {
        bg: '$elbg2',
        borderColor: '$focus',
      },
    },
    invisible: {
      borderColor: 'transparent',
    },
  },
  size: {
    sm: {
      height: '$control_sm',
      fontSize: '$input$sm_fontSize',
      px: '$input$sm_px',
    },
    md: {
      height: '$control_md',
      fontSize: '$input$md_fontSize',
      px: '$input$md_px',
    },
    lg: {
      height: '$control_lg',
      fontSize: '$input$lg_fontSize',
      px: '$input$lg_px',
    },
  },
  state: {
    default: {},
    invalid: {
      borderColor: '$errorBorder !important',

      '&:focus': {
        outline: '$colors$focus solid 2px',
      },
    },
  },
  fullWidth: {
    true: {
      width: '100%',
    },
    false: {
      width: 'auto',
    },
  },
} as const

export const BaseInput = styled('input', baseTextInputCss)

export const UITextInput = styled(BaseInput, {
  borderWidth: '$input$borderWidth',
  borderRadius: '$input$borderRadius',
  color: '$text',

  '&::placeholder': {
    color: '$input$placeholder_color',
  },

  variants: textInputVariants,

  defaultVariants: {
    size: 'md',
    variant: 'outline',
    state: 'default',
    fullWidth: true,
  },
})

type TextInputProps = {
  isRequired?: boolean
  isInvalid?: boolean
  label?: string
  value?: string
  onChangeVal?: (value: string) => void
} & React.ComponentProps<typeof UITextInput>

export const TextInput = React.forwardRef<React.ElementRef<typeof UITextInput>, TextInputProps>(
  function TextInput(
    {
      isRequired,
      isInvalid,
      label,
      type = 'text',
      value,
      onChangeVal,
      onChange,
      css,
      ...restProps
    },
    forwardedRef
  ) {
    return (
      <UITextInput
        type={type}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        aria-label={label}
        state={isInvalid ? 'invalid' : undefined}
        value={value}
        onChange={(event) => {
          onChange?.(event)
          onChangeVal?.(event.target.value)
        }}
        css={css as any}
        {...restProps}
        ref={forwardedRef}
      />
    )
  }
)
