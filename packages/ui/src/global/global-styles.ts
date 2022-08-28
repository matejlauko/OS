export const globalStyles = {
  html: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    textRendering: 'optimizeLegibility',
    fontSize: '$base',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'none',
    width: '100vw',
    overflowX: 'hidden',

    '::-webkit-scrollbar': {
      width: '$scrollbar$width',
    },
    '::-webkit-scrollbar-track': {
      bg: '$bodyBg',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '$scrollbar$borderRadius',
      opacity: 0,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: '$scrollbar$borderWidth',
      backgroundClip: 'content-box',
      bg: '$scrollbar$bg',
    },
  },

  body: {
    color: '$text',
    lineHeight: '$body',
    fontFamily: '$body',
    bg: '$bodyBg',
    fontFeatureSettings: 'kern',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '0',
  },
  'html, body, #root, #__next': {
    height: '100%',
  },
  '#__next': {
    position: 'relative',
    zIndex: '$base',
  },

  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  // '.js-focus-visible :focus:not(.focus-visible)': {
  //   outline: 'none',
  // },
  // 'button.focus-visible, [role=button].focus-visible': {
  //   outline: 'none',

  //   /* Visible in the full-colour space */
  //   boxShadow: `$ring`,

  //   /* Visible in Windows high-contrast themes */
  //   outlineColor: 'transparent',
  //   outlineWidth: '2px',
  //   outlineStyle: 'dotted',
  // },
  // 'a.focus-visible': {
  //   outline: 'none',
  //   color: '$yellow11',
  //   textDecoration: 'none',
  // },

  ':focus': {
    outline: 'none',
  },

  /* Remove default webkit search input styling */
  [`input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration`]: {
    '-webkit-appearance': 'none',
  },

  'a, button, [role="button"]': {
    cursor: 'pointer',
  },
} as const
