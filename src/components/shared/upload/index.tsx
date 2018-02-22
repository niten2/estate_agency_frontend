import * as React from "react"
import Dropzone from "react-dropzone"
import request from "superagent"

import settings from "src/config/settings"
import Notification from "src/config/notification"

interface P {
  handleSetImages: any
}

class UploadRoom extends React.Component<P, {}> {

  handleDrop = async (files) => {

    const urls = await Promise.all(
      files.map(async file => {
        const formData = new FormData()

        formData.append("file", file)
        formData.append("upload_preset", settings.cloudinary.upload_preset)
        formData.append("api_key", settings.cloudinary.api_key)

        try {
          let res = await request
            .post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload")
            .send(formData)

          return res.body.url
        } catch (err) {
          Notification.error(err.message)
        }
      })
    )

    this.props.handleSetImages(urls)
  }

  render() {
    return (
      <div>

        <Dropzone
          onDrop={this.handleDrop}
          multiple={true}
          accept="image/*"
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>

        <br />

      </div>
    )
  }
}

export default UploadRoom
