const commonRules = require('./index')

module.exports = {
  extends: ['next/core-web-vitals'],
  rules: Object.assign(commonRules.rules, {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  }),
  env: {
    browser: true,
    node: true,
  },
}
