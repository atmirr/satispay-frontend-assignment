import React from 'react';
import { Button } from 'antd';

function FetchMore({
  loading,
  handleFetchMore,
}: {
  loading: boolean;
  handleFetchMore: () => void;
}) {
  return (
    <div className="fetch-more-wrapper">
      <Button
        disabled={loading}
        onClick={handleFetchMore}
        className="fetch-more"
      >
        Fetch More
      </Button>
    </div>
  );
}

export default FetchMore;
