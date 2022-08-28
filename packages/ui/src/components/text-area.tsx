import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { styled } from '../create'
import { baseTextInputCss } from './text-input'

export const UITextArea = styled(TextareaAutosize, baseTextInputCss, {
  resize: 'none',
  width: '100%',
  borderWidth: '$textArea$borderWidth',
  lineHeight: '$textArea$lineHeight',
  color: '$text',

  '&:disabled': {
    cursor: 'default',
    resize: 'none',
    opacity: '$textArea$disabled_opacity',
  },

  '&::placeholder': {
    color: '$textArea$placeholder_color',
  },

  variants: {
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
        fontSize: '$textArea$sm_fontSize',
        borderRadius: '$textArea$sm_borderRadius',
        px: '$textArea$sm_px',
        py: '$textArea$sm_py',
        minWidth: '$textArea$sm_minWidth',
        minHeight: '$textArea$sm_minHeight',
      },
      md: {
        fontSize: '$textArea$md_fontSize',
        borderRadius: '$textArea$md_borderRadius',
        px: '$textArea$md_px',
        py: '$textArea$md_py',
        minWidth: '$textArea$md_minWidth',
        minHeight: '$textArea$md_minHeight',
      },
      lg: {
        fontSize: '$textArea$lg_fontSize',
        borderRadius: '$textArea$lg_borderRadius',
        px: '$textArea$lg_px',
        py: '$textArea$lg_py',
        minWidth: '$textArea$lg_minWidth',
        minHeight: '$textArea$lg_minHeight',
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
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})

type TextAreaProps = {
  label?: string
  value?: string
  onChangeVal?: (value: string) => void
} & React.ComponentProps<typeof UITextArea>

export const TextArea = React.forwardRef<React.ElementRef<typeof UITextArea>, TextAreaProps>(
  function TextArea(
    { label, value, minRows = 3, maxRows, onChangeVal, onChange, css, ...restProps },
    forwardedRef
  ) {
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event)
        onChangeVal?.(event.target.value)
      },
      [onChange, onChangeVal]
    )

    return (
      <UITextArea
        aria-label={label}
        value={value}
        minRows={minRows}
        maxRows={maxRows}
        onChange={handleChange}
        css={css as any}
        {...restProps}
        ref={forwardedRef}
      />
    )
  }
)
