import { gql } from '@apollo/client';

const POKEMONS = gql`
  query Pokemons($query: String, $type: String, $after: ID, $limit: Int) {
    pokemons(q: $query, type: $type, after: $after, limit: $limit) {
      edges {
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default POKEMONS;
