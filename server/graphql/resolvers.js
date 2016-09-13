import async from 'asyncawait/async'
import await from 'asyncawait/await'

import config from 'config'

import {
  Gallery,
  GalleryImage,
} from '../db'

const resolveFunctions = {
  RootQuery: {
    galleries(root, args, context) {
      return Gallery.getAll()
    },
    gallery(root, { slug }, context) {
      return Gallery.getBySlug(slug)
    }
  },
  Gallery: {
    images(gallery) {
      const images = GalleryImage.getAllByGalleryId(gallery.id)
      return images.map(image => Object.assign({}, image, { gallery }))
    },
    image(gallery) {
      const image = GalleryImage.getFirstByGalleryId(gallery.id)
      return image ? Object.assign({}, image, { gallery }) : null
    },
  },
  Image: {
    url(image) {
      return ''
    },
    small(image) {
      return ''
    },
    medium(image) {
      return ''
    },
    large(image) {
      return ''
    },
    full(image) {
      return ''
    },
  },
}

export default resolveFunctions
