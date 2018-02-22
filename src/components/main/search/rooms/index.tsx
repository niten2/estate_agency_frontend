import * as React from 'react'

import View from './view'

interface P {
  rooms: any
}

class MainListRoom extends React.Component<P, {}> {

  render() {
    let { rooms } = this.props

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> List Rooms
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Edit</th>
                      </tr>
                    </thead>
                    <tbody>

                      { rooms.map((room, index) =>
                        <View
                          key={index}
                          room={room}
                        />
                      )}

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default MainListRoom
