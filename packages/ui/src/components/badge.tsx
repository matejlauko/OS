import { styled } from '../create'

export type BadgeProps = React.ComponentProps<typeof Badge>

export const Badge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  borderRadius: '$badge$borderRadius',
  letterSpacing: '$badge$letterSpacing',
  fontWeight: '$badge$fontWeight',

  variants: {
    size: {
      sm: {
        fontSize: '$badge$sm_fontSize',
        px: '$badge$sm_px',
        height: '$badge$sm_height',
      },
    },
    color: {
      green: {
        backgroundColor: '$green3',
        color: '$green11',
      },
      yellow: {
        backgroundColor: '$yellow3',
        color: '$yellow11',
      },
      crimson: {
        backgroundColor: '$crimson3',
        color: '$crimson11',
      },
      blue: {
        backgroundColor: '$blue3',
        color: '$blue11',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
