import * as React from "react"
import { Input } from 'reactstrap'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import Link from "src/config/link"
import { withData } from './queries'

class MainShowRoom extends React.Component<any, any> {

  render() {
    let { room, loading, error } = this.props.roomQuery

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 message={error}/>
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">

              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Room
                </div>

                <div className="card-block">
                  <form className="form-2orizontal">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Name</span>
                          <Input
                            name="name"
                            placeholder="name"
                            defaultValue={room.name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">

                      <Link to="/">
                        <button
                          className="btn btn-default"
                        >
                          Cancel
                        </button>
                      </Link>

                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default withData(MainShowRoom)
