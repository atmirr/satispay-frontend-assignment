import React from 'react';
import { Typography } from 'antd';

function Error({ error }: { error: string }) {
  return (
    <div className="error-wrapper">
      <Typography.Text type="danger">{error}</Typography.Text>
    </div>
  );
}

export default Error;
