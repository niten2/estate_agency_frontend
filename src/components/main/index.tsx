import * as React from "react"
import Info from "./info"
import Search from "./search"
import Rooms from "./rooms"

class Main extends React.Component {

  render() {
    return (
      <div>
        <Info />
        <Search />
        <Rooms />
      </div>
    )
  }
}

export default Main
