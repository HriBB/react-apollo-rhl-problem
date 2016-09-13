import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Loader from 'components/ux/Loader'
import Content from 'components/ux/Content'
import Title from 'components/ux/Title'
import Item from 'components/ux/Title/Item'
import Button from 'components/ux/Button'
import Masonry, { MasonryItem } from 'components/ux/Masonry'
import GalleryListItem from './GalleryListItem'

import './GalleryList.scss'

class GalleryList extends Component {

  render() {
    const { actions, data: { error, loading, galleries } } = this.props
    if (error) return <Title>{error.message}</Title>
    if (loading) return <Loader/>
    return (
      <Content className={'bit-admin-gallery-list'}>
        <Title>
          <Item>Gallery</Item>
          <Button onClick={actions.addGallery}>Add gallery</Button>
        </Title>
        <Masonry big>
          {galleries.map(gallery =>
            <MasonryItem key={gallery.id}>
              <GalleryListItem gallery={gallery} actions={actions}/>
            </MasonryItem>
          )}
        </Masonry>
      </Content>
    )
  }

}

const GET_GALLERIES = gql`
  query galleries {
    galleries {
      id
      slug
      name
      description
      image {
        id
        slug
        name
        description
        small
      }
    }
  }
`

const withData = graphql(GET_GALLERIES)

const GalleryListWithData = withData(GalleryList)

export default GalleryListWithData
