import * as React from "react"
import { Input } from "reactstrap"
import { concat } from "ramda"

import Link from "src/config/link"
import Notification from "src/config/notification"
import { withData } from "./queries"
import Upload from "src/components/shared/upload"
import Slider from "src/components/shared/slider"

class NewRoom extends React.Component<any, any> {

  state = {
    room: {
      images: [],
      region: "",
      address: "",
      house_number: "",
      number_of_rooms: "",
      area: "",
      floor: "",
      deadline: "",
      price: "",
    }
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { room } = this.state

    room[name] = value
    this.setState({ room })
  }

  handleSetImages = (urls) => {
    let { room } = this.state

    room.images = concat(room.images, urls)

    this.setState({ room })
  }

  handleCreate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { room } = this.state

    const options = {
      variables: {
        input: {
          images: room.images,
          region: room.region,
          address: room.address,
          house_number: room.house_number,
          number_of_rooms: room.number_of_rooms,
          area: room.area,
          floor: room.floor,
          deadline: room.deadline,
          price: room.price,
        }
      },
    }

    try {
      await this.props.createRoomQuery(options)

      Notification.success("create room")

      this.setState({
        client: {
          name: "",
          images: [],
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
                          <span className="input-group-addon">Район</span>
                          <Input
                            name="region"
                            placeholder="region"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.region}
                          />
                        </div>
                      </div>
                    </div>


                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Адресс</span>
                          <Input
                            name="address"
                            placeholder="address"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.address}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Номер дома</span>
                          <Input
                            name="house_number"
                            placeholder="house_number"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.house_number}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Количество Комнат</span>
                          <Input
                            name="number_of_rooms"
                            placeholder="number_of_rooms"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.number_of_rooms}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Площадь</span>
                          <Input
                            name="area"
                            placeholder="area"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.area}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Этаж</span>
                          <Input
                            name="floor"
                            placeholder="floor"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.floor}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Срок сдачи</span>
                          <Input
                            name="deadline"
                            placeholder="deadline"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.deadline}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Цена</span>
                          <Input
                            name="price"
                            placeholder="price"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={room.price}
                          />
                        </div>
                      </div>
                    </div>


                    <Upload
                      handleSetImages={this.handleSetImages}
                    />

                    <Slider
                      urls={room.images}
                    />

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
