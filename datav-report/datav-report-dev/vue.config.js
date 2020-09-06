const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {

  devServer: {
    hot: true
  },

  configureWebpack: {
    resolve: {
      symlinks: true
    }
    // css: {
    //   extract: IS_PROD
    // }
  }

}
