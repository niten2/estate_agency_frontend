import { compose, graphql } from 'react-apollo'
import gql from "graphql-tag"

const roomQuery = gql`
  query room($id: ID!) {
    room(id: $id) {
      id

      name
      images
    }
  }
`

const updateRoomQuery = gql`
  mutation updateRoom($input: RoomUpdateInput!) {
    updateRoom(input: $input) {
      id
    }
  }
`

const deleteRoomQuery = gql`
  mutation deleteRoom($input: IdInput!) {
    deleteRoom(input: $input) {
      id
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    roomQuery, {
      name: "roomQuery" ,
      options: (props) => ({
        variables: {
          id: props.match.params.id,
        },
        fetchPolicy: "network-only",
      })
    }
  ),
  graphql<any, any, any>(
    updateRoomQuery, {
      name: "updateRoomQuery",
    }
  ),
  graphql<any, any, any>(
    deleteRoomQuery, {
      name: "deleteRoomQuery",
    }
  ),
)
