import * as React from 'react'
import Link from "src/config/link"

interface P {
  room: [any]
}

class ViewClient extends React.Component<P, any> {

  state = {
    attributes: [
      "name",
    ]
  }

  render() {
    let { room } = this.props
    let { attributes } = this.state

    return (
      <tr>
        {
          attributes.map((attribute, index) => {
            return (
              <td key={index}>
                {room[attribute]}
              </td>
            )
          })
        }

        <td>
          <Link
            to={`/admin/rooms/${room.id}`}
          >
            <button className="btn btn-primary">
              Edit
            </button>
          </Link>
        </td>

      </tr>
    )
  }

}

export default ViewClient
