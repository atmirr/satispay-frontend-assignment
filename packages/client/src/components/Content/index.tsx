import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useQuery, useLazyQuery } from '@apollo/client';
import POKEMONS from 'src/graphql/queries/pokemons';
import POKEMONS_TYPES from 'src/graphql/queries/pokemonsTypes';
import PokemonsResult from './components/PokemonsResult';
import PokemonsSearch from './components/PokemonsSearch';
import Error from './components/Error';

const PAGE_LIMIT = 10;

export interface Pokemon {
  name: string;
  types: string[];
  classification: string;
}

export interface PokemonNode extends Pokemon {
  id: number;
}

function Content() {
  const [query, setQuery] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();

  const { data: pokemonsTypesData, loading: pokemonsTypesLoading } = useQuery(
    POKEMONS_TYPES,
  );
  const [loadCache, { data, loading, error, fetchMore }] = useLazyQuery(
    POKEMONS,
  );

  const endCursor = data?.pokemons?.pageInfo?.endCursor;
  const hasNextPage = data?.pokemons?.pageInfo?.hasNextPage;
  const pokemons = data?.pokemons?.edges?.map(
    ({ node: { id, name, types, classification } }: { node: PokemonNode }) => ({
      key: id,
      name,
      types: types.join(', '),
      classification,
    }),
  );

  const handleFetchMore = () => {
    if (fetchMore && hasNextPage) {
      fetchMore({
        variables: {
          query,
          type,
          after: endCursor,
          limit: PAGE_LIMIT,
        },
      });
    }
  };
  const handleChangeQuery = (value?: string) => setQuery(value);
  const handleChangeType = (value?: string) => setType(value);

  useEffect(() => {
    return loadCache({
      variables: { query, type },
    });
  }, [query, type]);

  return (
    <Layout.Content>
      <div className="container">
        <div className="content-wrapper">
          <PokemonsSearch
            types={pokemonsTypesData?.pokemonsTypes}
            loading={pokemonsTypesLoading}
            handleChangeQuery={handleChangeQuery}
            handleChangeType={handleChangeType}
          />
          {error ? (
            <Error error={error?.message} />
          ) : (
            <PokemonsResult
              items={pokemons}
              loading={loading}
              hasNextPage={hasNextPage}
              handleFetchMore={handleFetchMore}
            />
          )}
        </div>
      </div>
    </Layout.Content>
  );
}

export default Content;
