module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", '../src/**/*.stories.js'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-postcss"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};