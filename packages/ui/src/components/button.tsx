import * as React from 'react'
import { css, styled } from '../create'

export const resetButtonCss = css({
  appearance: 'none',
  background: 'transparent',
  userSelect: 'none',
  lineHeight: '1',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  fontFamily: 'inherit',
  // borderColor: 'transparent'
})

export const baseButtonCss = css(resetButtonCss, {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  transition:
    'background-color $appear_fast, color $appear_fast, border-color $appear_fast, box-shadow $appear_fast',

  '&:focus-visible': {
    outline: '$colors$focus solid 2px',
  },
  // TODO: what is this? maybe fix for high contrast OS themes
  '&:focus:not(:focus-visible)': {
    outline: 'transparent solid 1px',
  },

  '&[href]:hover': {
    textDecoration: 'none',
  },

  '&:disabled': {
    cursor: 'default',
    opacity: '$button$disabled_opacity',
  },
})

export const buttonVariants = {
  variant: {
    primary: {
      color: '$textContrast',
    },
    secondary: {
      borderWidth: 2,
    },
    tertiary: {},
  },
  tone: {
    neutral: {},
    subtle: {},
    accent: {},
    confirm: {},
    destroy: {},
  },
  size: {
    sm: {
      px: '$2',
      height: '$control_sm',
      fontSize: '$2',
    },
    md: {
      px: '$4',
      height: '$control_md',
      fontSize: '$base',
    },
    lg: {
      px: '$8',
      height: '$control_lg',
      fontSize: '$4',
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

export const buttonCompoundVariants = [
  // Primary
  {
    variant: 'primary',
    tone: 'accent',
    css: {
      backgroundColor: '$accentSolid',
      '&:hover:not(:disabled)': {
        bg: '$accentSolid2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$accentSolid3',
      },
    },
  },
  {
    variant: 'primary',
    tone: 'confirm',
    css: {
      backgroundColor: '$confirmSolid',
      '&:hover:not(:disabled)': {
        bg: '$confirmSolid2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$confirmSolid3',
      },
    },
  },
  {
    variant: 'primary',
    tone: 'destroy',
    css: {
      backgroundColor: '$destroySolid',
      '&:hover:not(:disabled)': {
        bg: '$destroySolid2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$destroySolid3',
      },
    },
  },
  // Secondary
  {
    variant: 'secondary',
    tone: 'neutral',
    css: {
      color: '$hiContrast',
      borderColor: '$border',

      '&:hover:not(:disabled)': {
        borderColor: '$border2',
        bg: '$elbgA',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$elbgA2',
      },
    },
  },
  {
    variant: 'secondary',
    tone: 'subtle',
    css: {
      color: '$text2',
      borderColor: '$border',

      '&:hover:not(:disabled)': {
        color: '$text',
        borderColor: '$border2',
        bg: '$elbgA',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        color: '$text',
        bg: '$elbgA2',
      },
    },
  },
  {
    variant: 'secondary',
    tone: 'accent',
    css: {
      color: '$accentText',
      borderColor: '$accentBorder',

      '&:hover:not(:disabled)': {
        bg: '$accentElbg',
        borderColor: '$accentBorder2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$accentElbg2',
      },
    },
  },
  {
    variant: 'secondary',
    tone: 'confirm',
    css: {
      color: '$confirmText',
      borderColor: '$confirmBorder',

      '&:hover:not(:disabled)': {
        bg: '$confirmElbg',
        borderColor: '$confirmBorder2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$confirmElbg2',
      },
    },
  },
  {
    variant: 'secondary',
    tone: 'destroy',
    css: {
      color: '$destroyText',
      borderColor: '$destroyBorder',

      '&:hover:not(:disabled)': {
        bg: '$destroyElbg',
        borderColor: '$destroyBorder2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$destroyElbg2',
      },
    },
  },
  // Tertiary
  {
    variant: 'tertiary',
    tone: 'neutral',
    css: {
      color: '$text',

      '&:hover:not(:disabled)': {
        bg: '$elbgA2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$elbgA3',
      },
    },
  },
  {
    variant: 'tertiary',
    tone: 'subtle',
    css: {
      color: '$text2',

      '&:hover:not(:disabled)': {
        color: '$text',
        bg: '$elbgA2',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        color: '$text',
        bg: '$elbgA3',
      },
    },
  },
  {
    variant: 'tertiary',
    tone: 'accent',
    css: {
      color: '$accentText',

      '&:hover:not(:disabled)': {
        bg: '$accentElbg',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$accentElbg2',
      },
    },
  },
  {
    variant: 'tertiary',
    tone: 'confirm',
    css: {
      color: '$confirmText',

      '&:hover:not(:disabled)': {
        bg: '$confirmElbg',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$confirmElbg2',
      },
    },
  },
  {
    variant: 'tertiary',
    tone: 'destroy',
    css: {
      color: '$destroyText',

      '&:hover:not(:disabled)': {
        bg: '$destroyElbg',
      },
      '&:active:not(:disabled), &[data-state="open"]': {
        bg: '$destroyElbg2',
      },
    },
  },
]

const defaultVariants = {
  size: 'md',
  variant: 'secondary',
  tone: 'neutral',
} as const

export const BaseButton = styled('button', baseButtonCss)

export const UIButton = styled(BaseButton, {
  justifyContent: 'center',
  borderRadius: '$button$borderRadius',
  fontWeight: '$button$fontWeight',

  variants: buttonVariants,
  compoundVariants: buttonCompoundVariants,
  defaultVariants,
})

type ButtonProps = {
  iconBefore?: React.ReactElement
  iconAfter?: React.ReactElement
  as?: React.ElementType
} & React.ComponentProps<typeof UIButton>

export const Button = React.forwardRef<
  React.ElementRef<typeof UIButton>,
  React.PropsWithChildren<ButtonProps>
>(function Button(
  {
    iconBefore,
    iconAfter,
    children,
    css,
    variant = defaultVariants.variant,
    tone = defaultVariants.tone,
    size = defaultVariants.size,
    ...restProps
  },
  forwardedRef
) {
  let content = <>{children}</>

  if (iconBefore) {
    content = (
      <>
        <UIIcon position="before">
          {React.cloneElement(iconBefore, {
            size: 'text',
            color: variant === 'primary' || (tone && tone !== 'neutral') ? 'inherit' : undefined,
          })}
        </UIIcon>
        {children}
      </>
    )
  }

  if (iconAfter) {
    content = (
      <>
        {children}
        <UIIcon position="after">
          {React.cloneElement(iconAfter, {
            size: 'text',
            color: variant === 'primary' || (tone && tone !== 'neutral') ? 'inherit' : undefined,
          })}
        </UIIcon>
      </>
    )
  }

  return (
    <UIButton
      variant={variant}
      tone={tone}
      size={size}
      {...restProps}
      css={css as any}
      ref={forwardedRef}
    >
      {content}
    </UIButton>
  )
})

const UIIcon = styled('span', {
  display: 'inline-flex',
  alignSelf: 'center',
  flexShrink: 0,
  variants: {
    position: {
      before: {
        mr: '$2',
      },
      after: {
        ml: '$2',
      },
    },
  },
})

export const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Button> & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkButton(props, forwardedRef) {
  return <Button {...props} as="a" ref={forwardedRef as any} />
})
