import { styled, css } from '../create'

export const Box = styled('div', {
  display: 'block',
})

export const containerCss = css({
  px: '$4',
  width: '100%',
  maxWidth: '$container$maxWidth',

  '@lg': {
    px: '$8',
  },

  variants: {
    align: {
      center: {
        mx: 'auto',
      },
      left: {},
    },
  },
  defaultVariants: {
    align: 'center',
  },
})

export const Container = styled('div', containerCss)

export const centerCss = css({
  display: 'grid',
  placeItems: 'center',

  variants: {
    text: {
      true: {
        textAlign: 'center',
      },
    },
  },
})

export const Center = styled('div', centerCss)

const commonStackStyles = {
  gap: {
    none: { gap: 0 },
    xs: {
      gap: '$1',
    },
    sm: {
      gap: '$2',
    },
    md: {
      gap: '$4',
    },
    lg: {
      gap: '$8',
    },
    xl: {
      gap: '$12',
    },
  },
  justify: {
    start: {
      justifyContent: 'flex-start',
    },
    end: {
      justifyContent: 'flex-end',
    },
    center: {
      justifyContent: 'center',
    },
    between: {
      justifyContent: 'space-between',
    },
  },
  align: {
    start: {
      alignItems: 'flex-start',
    },
    center: {
      alignItems: 'center',
    },
    end: {
      alignItems: 'flex-end',
    },
  },
}

export const hstackCss = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  flexDirection: 'row',

  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
        alignItems: 'start',
      },
    },
    ...commonStackStyles,
  },
  defaultVariants: {
    gap: 'md',
  },
})

export const HStack = styled('div', hstackCss)

export const vstackCss = css({
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',

  variants: {
    ...commonStackStyles,
  },
  defaultVariants: {
    gap: 'md',
  },
})

export const VStack = styled('div', vstackCss)

export const HCenter = styled('div', { display: 'flex', justifyContent: 'center' })

export const Scrollable = styled('div', {
  overflow: 'auto',
  height: '100%',

  '&::-webkit-scrollbar': {
    width: '$scrollbar$width',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '$scrollbar$borderRadius',
    opacity: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '$scrollbar$borderWidth',
    backgroundClip: 'content-box',
    bg: '$scrollbar$bg',
  },

  variants: {
    on: {
      bg: {
        '&::-webkit-scrollbar-track': {
          bg: '$bodybg',
        },
      },
      ui: {
        '&::-webkit-scrollbar-track': {
          bg: '$uibg',
        },
      },
    },
  },
})
