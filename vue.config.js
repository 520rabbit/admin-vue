module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://demo.it98k.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}