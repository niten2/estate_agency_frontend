import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const searchRoomsQuery = gql`
  mutation searchRoom($input: SearchInput!) {
    searchRoom(input: $input) {
      id

      name
    }
  }
`

// const roomsQuery = gql`
//   query {
//     rooms {
//       id

//       name
//     }
//   }
// `

export const withData = compose(
  graphql<any, any, any>(
    searchRoomsQuery, {
      name: "searchRoomsQuery",
    }
  ),
  // graphql<any, any, any>(
  //   roomsQuery, {
  //     name: "roomsQuery",
  //   }
  // ),
)
