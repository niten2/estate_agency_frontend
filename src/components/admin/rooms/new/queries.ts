import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const createRoomQuery = gql`
  mutation createRoom($input: RoomCreateInput!) {
    createRoom(input: $input) {
      id

      name
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
