import gql from "graphql-tag"
import { graphql } from "react-apollo"

const searchRoomsQuery = gql`
  mutation searchRoom($input: SearchInput!) {
    searchRoom(input: $input) {
      id

      name
    }
  }
`

export const withData = graphql<any, any, any>(
  searchRoomsQuery, {
    name: "searchRoomsQuery",
  }
)
