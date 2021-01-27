import { gql } from '@apollo/client';

const POKEMONS_TYPES = gql`
  query PokemonsTypes {
    pokemonsTypes
  }
`;

export default POKEMONS_TYPES;
