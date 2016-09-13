import React, { Component } from 'react'

import './FileList.scss'

const FileList = ComposedComponent => class extends Component {

  constructor(props) {
    super(props)
    this.state = { images: [] }
  }

  /**
   * This should be used as input onChange handler
   */
  readImages = (e) => {
    const files = e.target.files

    // no files
    if (!files.length) {
      this.setState({ images: [] })
      return
    }

    // got some files, prepare images
    let images = []

    // check for file reader
    const hasFileReader = !!window.FileReader
    if (hasFileReader) {

      // got file reader
      let count = files.length
      Array.from(files).forEach((file, index) => {
        // create file reader
        const reader = new FileReader()
        // set onload handler
        reader.onload = (e) => {
          images.push({
            name: file.name,
            key: `${index}${file.lastModified}`,
            url: e.target.result,
          })
          // track count
          count--
          // once all images are loaded
          if (count === 0) {
            // do set the state
            this.setState({ images: images })
          }
        }
        // read file into string
        reader.readAsDataURL(file)
      })

    } else {

      // no file reader, simply map all files
      images = Array.from(files).map((file, index) => ({
        name: file.name,
        key: `${index}${file.lastModified}`,
      }))
      // and immediately set the state
      this.setState({ images: images })

    }
  }

  /**
   * This will be sent to the wrapped component
   */
  renderImages() {
    return (
      <div className={'file-list'}>
        {this.state.images.map(image =>
          <div className={'file'} key={image.key}>
            {image.url && <div className={'image'} style={{ backgroundImage: `url(${image.url})` }}></div>}
            <span className={'name'}>{image.name}</span>
          </div>
        )}
      </div>
    )
  }

  /**
   * Render passed Component
   */
  render() {
    return (
      <ComposedComponent
        {...this.props}
        images={this.renderImages()}
        readImages={this.readImages}
      />
    )
  }
}

export default FileList
