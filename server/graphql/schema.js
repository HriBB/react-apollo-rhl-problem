const typeDefinitions = `

type Gallery {
  id: String!
  slug: String!
  name: String!
  description: String
  images: [Image]
  image: Image
}

type Image {
  id: String!
  slug: String!
  name: String!
  filename: String!
  extension: String!
  description: String
  url: String!
  small: String!
  medium: String!
  large: String!
  full: String!
}

type RootQuery {
  galleries: [Gallery]
  gallery(slug: String!): Gallery
}

schema {
  query: RootQuery
}

`

export default [typeDefinitions]
