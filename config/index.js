var path = require('path')

module.exports = {
  server: {
    url: 'http://localhost:4000',
    host: 'localhost',
    port: 4000,
  },
  dev: {
    url: 'http://localhost:3000',
    host: '0.0.0.0',
    port: 3000,
  },
  static: {
    path: path.resolve(__dirname, '..', 'static'),
  },
  dist: {
    path: path.resolve(__dirname, '..', 'dist'),
  },
  upload: {
    dir: '/images',
    path: path.resolve(__dirname, '..', 'images'),
    url: 'http://localhost:4000/images',
  },
  image: {
    placeholder: 'http://localhost:4000/static/images/placeholder.png',
    allowedMimeTypes: ['image/jpeg', 'image/png'],
    sizes: {
      small:  { width: 480,   height: 480,  crop: false, quality: 90 },
      medium: { width: 768,   height: 768,  crop: false, quality: 90 },
      large:  { width: 1280,  height: 1280, crop: false, quality: 90 },
      full:   { width: 1920,  height: 1920, crop: false, quality: 90 },
    },
  },
}
