import * as React from "react"
import Link from "src/config/link"

import ListRooms from "./list"

class IndexRooms extends React.Component {

  render() {
    return (
      <div>

        <div className="container-fluid">
          <div className="card">
            <div className="card-block">
              <Link to={`/admin/rooms/new`}>
                <button type="button" className="btn btn-primary">
                  New Room
                </button>
              </Link>
            </div>
          </div>
        </div>


        <ListRooms />
      </div>
    )
  }
}

export default IndexRooms
