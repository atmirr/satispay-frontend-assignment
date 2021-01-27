import React, { useState } from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function TypesDropdown({
  types,
  loading,
  placeholder = 'Type',
  handleChangeType,
}: {
  types?: string[];
  loading?: boolean;
  placeholder?: string;
  handleChangeType: (value?: string) => void;
}) {
  const [selectedType, setSelectedType] = useState<string | undefined>();
  const handleChangeItem = (value?: string) => {
    setSelectedType(value);
    handleChangeType(value);
  };
  const items = (
    <Menu>
      <Menu.Item onClick={() => handleChangeItem(undefined)}>
        Select All
      </Menu.Item>
      <Menu.Divider />
      {types?.map((type, index) => (
        <Menu.Item key={index} onClick={() => handleChangeItem(type)}>
          {type}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="types-dropdown-wrapper">
      <Dropdown overlay={items} trigger={['click']} className="types-dropdown">
        <Button loading={loading}>
          {selectedType || placeholder} {!loading && <DownOutlined />}
        </Button>
      </Dropdown>
    </div>
  );
}

export default TypesDropdown;
