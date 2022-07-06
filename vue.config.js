const { defineConfig } = require('@vue/cli-service')
const path = require('path');

console.info('__dirname: senssacional: ', __dirname);

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        Store: path.resolve(__dirname, 'src/store/index.js'),
        Router: path.resolve(__dirname, 'src/router/index.js'),
        Pages: path.resolve(__dirname, 'src/pages'),
        Layouts: path.resolve(__dirname, 'src/layouts'),
        Components: path.resolve(__dirname, 'src/components'),
      }
    }
  }
})
