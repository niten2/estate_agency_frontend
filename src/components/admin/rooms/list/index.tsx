import * as React from 'react'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import ViewClient from './view'
import { withData } from './queries'

interface P {
  roomsQuery: any
}

class ListRoom extends React.Component<P, {}> {

  render() {
    let { rooms, loading, error } = this.props.roomsQuery

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

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
                        <ViewClient
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

export default withData(ListRoom)
