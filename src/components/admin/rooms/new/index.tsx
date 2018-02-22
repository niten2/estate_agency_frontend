import * as React from "react"
import { Input } from "reactstrap"

import Link from "src/config/link"
import Notification from "src/config/notification"
import { withData } from "./queries"

class NewRoom extends React.Component<any, any> {

  state = {
    room: {
      name: "",
    },
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { room } = this.state

    room[name] = value
    this.setState({ room })
  }

  handleCreate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { room } = this.state

    const options = {
      variables: {
        input: {
          name: room.name,
        }
      },
    }

    try {
      await this.props.createRoomQuery(options)
      Notification.success("create room")

      this.setState({
        client: {
          name: "",
        }
      })
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleCreate()
    }
  }

  render() {
    let { room } = this.state

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">

              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> New Room
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
                        onClick={this.handleCreate}
                      >
                        Save changes
                      </button>

                      &nbsp;

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

export default withData(NewRoom)
