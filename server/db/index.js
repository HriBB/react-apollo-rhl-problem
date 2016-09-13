import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import createSlug from 'slug'

const db = low('db.json', { storage })

db.defaults({ galleries: [] }).value()
db.defaults({ gallery_images: [] }).value()

const galleries = db.get('galleries')
const galleryImages = db.get('gallery_images')

export const GalleryImage = {
  getAllByGalleryId: (id) => {
    return galleryImages.filter(i => i.gallery_id === id).value()
  },
  getFirstByGalleryId: (id) => {
    return galleryImages.filter(i => i.gallery_id === id).first().value()
  },
  getById: (id) => {
    return galleryImages.find({ id }).value()
  },
  create: (image) => {
    console.log('==> create image', image);
    return galleryImages.push(image).last().value()
  },
}

export const Gallery = {
  getAll: () => {
    return galleries.value()
  },
  getById: (id) => {
    return galleries.find({ id }).value()
  },
  getBySlug: (slug) => {
    return galleries.find({ slug }).value()
  },
  create: (gallery) => {
    return galleries.push(gallery).last().value()
  },
  update: (gallery) => {
    const { id } = gallery
    return galleries.find({ id }).assign(gallery).value()
  },
  delete: (id) => {
    return galleries.remove({ id }).value()
  },
  generateSlug: (name) => {
    let slug = createSlug(name.toLowerCase())
    let exists
    let number = 2
    let original = slug
    while (exists = Gallery.getBySlug(slug)) {
      slug = `${original}-${number}`
      number++
    }
    return slug
  },
}
