import { styled } from '../create'

export type AlertProps = React.ComponentProps<typeof Alert>

export const Alert = styled('div', {
  borderWidth: 1,
  borderRadius: '$md',

  variants: {
    size: {
      md: {
        p: '$3',
      },
    },
    variant: {
      info: {
        backgroundColor: '$slate2',
        borderColor: '$slate6',
      },
      success: {
        backgroundColor: '$green2',
        borderColor: '$green6',
      },
      error: {
        backgroundColor: '$errorComp',
        borderColor: '$errorBorder',
        color: '$errorText',
      },
      warning: {
        backgroundColor: '$orange2',
        borderColor: '$orange6',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'info',
  },
})
