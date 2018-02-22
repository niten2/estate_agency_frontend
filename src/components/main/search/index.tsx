import * as React from "react"
import { withData } from "./queries"
import { Input } from "reactstrap"

import MainRooms from "./rooms"

import Notification from "src/config/notification"

class Search extends React.Component<any, any> {

  state = {
    query: "",
    rooms: [],
  }

  componentWillReceiveProps(props: any) {
    this.setState({ rooms: props.roomsQuery.rooms })
  }

  handleSetState = (e) => {
    const { value } = e.target

    this.setState({ query: value })
  }

  handleSearch = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { query } = this.state

    const options = {
      variables: {
        input: {
          name: query,
        }
      },
    }

    try {
      let res = await this.props.searchRoomsQuery(options)
      this.setState({ rooms: res.data.searchRoom })

    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleSearch()
    }
  }

  render() {
    let { query, rooms } = this.state

    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-lg-12">
            <div className="card">

              <div className="card-header">
                <i className="fa fa-align-justify" />
                Search
              </div>

              <div className="input-prepend input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>

                <Input
                  name="query"
                  placeholder="What are you looking for?"
                  onChange={this.handleSetState}
                  onKeyPress={this.handleOnKeyPress}
                  value={query}
                />

                <span className="input-group-btn">
                  <button
                    className="btn btn-info"
                    type="button"
                    onClick={this.handleSearch}
                  >
                    Search
                  </button>
                </span>
              </div>

            </div>
          </div>
        </div>

        <MainRooms rooms={rooms} />

      </div>
    )
  }
}

export default withData(Search)
