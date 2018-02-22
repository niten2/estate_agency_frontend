import { compose, graphql } from 'react-apollo'
import gql from "graphql-tag"

const roomQuery = gql`
  query room($id: ID!) {
    room(id: $id) {
      id

      name
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
)
