import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import "./slider.css"

interface P {
  urls: any
}

export default class Reviews extends React.Component<P, {}> {
  render() {
    const images = this.props.urls.map((url) => { return { original: url }})

    return (
      <div className="style2 wrapper reviews">
        <ImageGallery
          sizes="(max-width: 600px) 300px, (min-width: 600px) 600px"
          items={images}
          slideInterval={4000}
          autoPlay={false}
          showPlayButton={false}
          showThumbnails={false}
          showFullscreenButton={false}
        />
      </div>
    )
  }
}

