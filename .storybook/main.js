module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
};
