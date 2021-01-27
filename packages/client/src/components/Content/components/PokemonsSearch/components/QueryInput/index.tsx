import React from 'react';
import { Input } from 'antd';

function QueryInput({
  placeholder = 'Search Pokemon by Name',
  handleChangeQuery,
}: {
  placeholder?: string;
  handleChangeQuery: (value: string) => void;
}) {
  return (
    <div className="query-input-wrapper">
      <Input
        placeholder={placeholder}
        onChange={(e) => handleChangeQuery(e.target.value)}
        className="query-input"
      />
    </div>
  );
}

export default QueryInput;
