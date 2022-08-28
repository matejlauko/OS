import { styled } from '../create'

export const textVariants = {
  variant: {
    normal: {
      color: '$text',
      fontWeight: '$normal',
    },
    support: {
      color: '$text2',
      fontWeight: '$normal',
    },
    error: {
      color: '$errorText',
      fontWeight: '$medium',
    },
    success: {
      color: '$successText',
      fontWeight: '$medium',
    },
  },
  color: {
    text: {
      color: '$text',
    },
    accent: {
      color: '$accentText',
    },
    muted: {
      color: '$mutedText',
    },
    muted2: {
      color: '$text3',
    },
    muted3: {
      color: '$text4',
    },
    muted4: {
      color: '$text5',
    },
    contrast: {
      color: '$textContrast',
    },
  },
  weight: {
    light: {
      fontWeight: '$light',
    },
    normal: {
      fontWeight: '$normal',
    },
    medium: {
      fontWeight: '$medium',
    },
    bold: {
      fontWeight: '$bold',
    },
  },
  caps: {
    true: {
      textTransform: 'uppercase',
      letterSpacing: '$text$caps_letterSpacing',
    },
  },
  size: {
    xxs: {
      fontSize: '$0',
    },
    xs: {
      fontSize: '$1',
    },
    sm: {
      fontSize: '$2',
    },
    base: {
      fontSize: '$base',
    },
    md: {
      fontSize: '$4',
    },
    lg: {
      fontSize: '$5',
    },
    xl: {
      fontSize: '$6',
    },
    xl2: {
      fontSize: '$7',
    },
    xl3: {
      fontSize: '$8',
    },
  },
  align: {
    center: { textAlign: 'center' },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' },
  },
} as const

export const Text = styled('span', {
  display: 'inline-block',
  variants: textVariants,
})

export const Paragraph = styled('p', {
  lineHeight: '$text$paragraph_lineHeight',
  variants: {
    ...textVariants,
    readable: {
      true: { maxWidth: 'min(600px, 75ch)' },
      large: { maxWidth: '800px' },
    },
  },
})
