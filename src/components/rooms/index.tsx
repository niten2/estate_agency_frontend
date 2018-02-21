import * as React from "react"
import ListRooms from "./list"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" />
                  rooms
                </div>

                <ListRooms />

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
