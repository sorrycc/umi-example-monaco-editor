const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  webpack5: {},
  chainWebpack(memo) {
    memo.plugin('m').use(MonacoWebpackPlugin)
  }
}
