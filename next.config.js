const path = require('path')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withOptimizedImages = require('next-optimized-images')
const withMDX = require('@next/mdx')({
  // parse mdx files
  extension: /\.mdx?$/
})

const baseConfig = {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    config.resolve.modules = [path.resolve('./src'), ...config.resolve.modules]
    return config
  }
}

module.exports = [withCSS, withFonts, withOptimizedImages, withMDX].reduce(
  (a, b) => b(a),
  baseConfig
)
