import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const createRoomQuery = gql`
  mutation createRoom($input: RoomCreateInput!) {
    createRoom(input: $input) {
      id

      images

      region
      address
      house_number
      number_of_rooms
      area
      floor
      deadline
      price
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    createRoomQuery, {
      name: "createRoomQuery",
    },
  ),
)
