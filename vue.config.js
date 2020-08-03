module.exports = {
  devServer: {
    port: '9100',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  productionSourceMap: false,
  outputDir: process.env.outputDir,
  publicPath: process.env.publicPath,
  css: {
    extract: false
  }
};
