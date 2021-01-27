import React from 'react';
import QueryInput from './components/QueryInput';
import TypesDropdown from './components/TypesDropdown';

function PokemonSearch({
  types,
  loading,
  handleChangeQuery,
  handleChangeType,
}: {
  types: string[];
  loading?: boolean;
  handleChangeQuery: (value?: string) => void;
  handleChangeType: (value?: string) => void;
}) {
  return (
    <div className="search-wrapper">
      <QueryInput handleChangeQuery={handleChangeQuery} />
      <TypesDropdown
        types={types}
        loading={loading}
        handleChangeType={handleChangeType}
      />
    </div>
  );
}

export default PokemonSearch;
