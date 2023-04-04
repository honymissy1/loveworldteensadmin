import { Table } from 'antd';
import { useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Offering',
    dataIndex: 'offering',
  },
  {
    title: 'Teevo',
    dataIndex: 'Teevo',
  },

  {
    title: 'Healing Streams',
    dataIndex: 'healingStreams',
  },
];
const data = [
    {
        key: 1,
        name: `Akintola Martins`,
        offering: 100,
        Teevo: 2356,
        healingStreams: 10
      },

      {
        key: 1,
        name: `Akintola Martins`,
        offering: 100,
        Teevo: 2356,
        healingStreams: 10
      },

      {
        key: 1,
        name: `Akintola Martins`,
        offering: 100,
        Teevo: 2356,
        healingStreams: 10
      },

    
];

const Seed = () =>{
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            setSelectedRowKeys(newSelectedRowKeys);
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            setSelectedRowKeys(newSelectedRowKeys);
          },
        },
      ],
    };
    return(
       <>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
       </>
    )
}

export default Seed