const path = require('path')

module.exports = {
  stories: [
    '../../../packages/ui/src/**/*.stories.mdx',
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@matejlauko/ui',
            replacement: path.resolve(__dirname, '../../../packages/ui/'),
          },
          {
            find: '@matejlauko/tokens',
            replacement: path.resolve(__dirname, '../../../packages/tokens/'),
          },
          {
            find: '@matejlauko/utils',
            replacement: path.resolve(__dirname, '../../../packages/utils/'),
          },
        ],
      },
    }
  },
}
