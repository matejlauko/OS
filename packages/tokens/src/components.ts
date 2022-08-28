import { merge } from '@matejlauko/utils'
import { compileComponentTokens } from './utils/component-tokens'

export const componentTokens = {
  text: {
    caps: {
      letterSpacing: '0.1em',
    },
    paragraph: {
      lineHeight: '$lineHeights$lg',
    },
  },

  heading: {
    lineHeight: '$lineHeights$sm',
    fontWeight: '$fontWeights$bold',
  },

  button: {
    borderRadius: '$radii$md',
    fontWeight: '$fontWeights$medium',
    disabled: {
      opacity: 0.7,
    },
  },

  icon: {
    xs: {
      size: '10px',
    },
    sm: {
      size: '16px',
    },
    md: {
      size: '20px',
    },
    lg: {
      size: '24px',
    },
    xl: {
      size: '32px',
    },
  },

  scrollbar: {
    width: '15px',
    borderRadius: '$radii$lg',
    borderWidth: '5px',
    bg: '$colors$gray6',
  },

  input: {
    borderWidth: '2px',
    borderRadius: '$radii$md',
    disabled: {
      opacity: 0.7,
    },
    sm: {
      px: '$space$2',
      fontSize: '$fontSizes$2',
    },
    md: {
      px: '$space$3',
      fontSize: '$fontSizes$base',
    },
    lg: {
      px: '$space$4',
      fontSize: '$fontSizes$4',
    },
    placeholder: {
      color: '$colors$gray9',
    },
  },

  textArea: {
    borderWidth: '2px',
    lineHeight: 1.4,
    disabled: {
      opacity: 0.7,
    },
    sm: {
      minHeight: '$sizes$control_sm',
      minWidth: '200px',
      fontSize: '$fontSizes$2',
      px: '$space$2',
      py: '$space$1',
      borderRadius: '$radii$md',
    },
    md: {
      minHeight: '$sizes$control_md',
      minWidth: '240px',
      fontSize: '$fontSizes$base',
      px: '$space$3',
      py: '$space$2',
      borderRadius: '$radii$md',
    },
    lg: {
      minHeight: '$sizes$control_md',
      minWidth: '300px',
      fontSize: '$fontSizes$4',
      px: '$space$4',
      py: '$space$3',
      borderRadius: '$radii$lg',
    },
    placeholder: {
      color: '$colors$gray9',
    },
  },

  select: {
    trigger: {
      borderRadius: '$radii$md',
      px: '$space$4',
      fontSize: '$fontSizes$base',
      height: '$sizes$control_md',
      color: '$colors$text2',
      borderWidth: '2px',
    },
  },

  overlay: {
    bg: '$colors$grayA12',
    backdropFilter: 'blur(4px)',
  },

  panel: {
    bg: '$colors$grayA2',
    backdropFilter: 'blur(20px)',
    borderRadius: '$radii$lg',
    boxShadow: '$shadows$5',
  },

  tooltip: {
    bg: '$colors$grayA12',
    borderRadius: '$radii$lg',
    boxShadow: '$shadows$3',
    color: '$colors$textContrast',
    fontSize: '$fontSizes$1',
    fontWeight: '$fontWeights$medium',
  },

  switch: {
    width: '$sizes$control_lg',
    height: '$sizes$control_sm',
    bg: '$colors$elbg2',
  },

  container: {
    maxWidth: '1200px',
  },

  badge: {
    borderRadius: '$radii$md',
    letterSpacing: '0.03em',
    fontWeight: '$fontWeights$semibold',
    sm: {
      fontSize: '$fontSizes$0',
      px: '$space$2',
      height: '$sizes$control_xs',
    },
  },
}

export const createComponentTokens = (
  customTokens?: RecursivePartialIndexed<typeof componentTokens>
) => compileComponentTokens(merge({}, componentTokens, customTokens))
