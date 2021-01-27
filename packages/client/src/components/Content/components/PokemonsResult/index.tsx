import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Pokemon as PokemonType } from 'src/components/Content';
import FetchMore from './components/FetchMore';

interface PokemonRow extends PokemonType {
  key: number;
}

const columns: ColumnsType<PokemonRow> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
  {
    key: 'types',
    title: 'Types',
    dataIndex: 'types',
  },
  {
    key: 'classification',
    title: 'Classification',
    dataIndex: 'classification',
  },
];

function PokemonsResult({
  items,
  loading,
  hasNextPage,
  handleFetchMore,
}: {
  items: PokemonRow[];
  loading: boolean;
  hasNextPage: boolean;
  handleFetchMore: () => void;
}) {
  return (
    <div className="result-wrapper">
      <Table
        dataSource={items}
        columns={columns}
        pagination={false}
        loading={loading}
      />
      {hasNextPage && (
        <FetchMore loading={loading} handleFetchMore={handleFetchMore} />
      )}
    </div>
  );
}

export default PokemonsResult;
