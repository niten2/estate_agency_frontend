import * as React from "react"
import { Input } from 'reactstrap'
import { set, lensProp } from 'ramda'

import Notification from 'src/config/notification'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import Link from "src/config/link"
import { withData } from './queries'

class ShowRoom extends React.Component<any, any> {

  state = {
    room: {
      id: "",
      name: "",
    },
  }

  componentWillReceiveProps(props: any) {
    this.setState({ room: props.roomQuery.room })
  }

  handleUpdate = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { room } = this.state

    let options = {
      variables: {
        input: {
          id: room.id,
          name: room.name,
        }
      },
    }

    try {
      await this.props.updateRoomQuery(options)

      Notification.success("update room")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleDelete = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { room } = this.state

    const options = {
      variables: {
        input: {
          id: room.id
        }
      },
    }

    try {
      await this.props.deleteRoomQuery(options)
      Notification.success("delete room")

      this.props.history.push("/admin/rooms")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({ room: set(lensProp(name), value, this.state.room) })
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleUpdate()
    }
  }

  render() {
    let { loading, error } = this.props.roomQuery
    let { room } = this.state

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
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleUpdate}
                      >
                        Save changes
                      </button>

                      {" "}

                      <button
                        className="btn btn-primary"
                        onClick={this.handleDelete}
                      >
                        Delete
                      </button>

                      {" "}

                      <Link to="/admin/rooms">
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

export default withData(ShowRoom)
