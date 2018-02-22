import gql from "graphql-tag"
import { graphql } from "react-apollo"

const roomsQuery = gql`
  query {
    rooms {
      id

      name
    }
  }
`

export const withData = graphql<any, any, any>(
  roomsQuery, {
    name: "roomsQuery",
    options: {
      fetchPolicy: "network-only",
    }
  }
)
