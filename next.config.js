const withCSS = require('@zeit/next-css')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  ...withCSS(),
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix: isProd ? '/hello-cothority' : ''
}
