import React, { useState } from 'react'
import { Button, Modal, Table } from 'antd'
import { useAntdTable } from 'ahooks'
import EditModal from './editModal'

interface Item {
  name: {
    last: string
  }
  email: string
  phone: string
  gender: 'male' | 'female'
}

interface Result {
  total: number
  list: Item[]
}

const getTableData = ({ current, pageSize }): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`

  return fetch(`https://randomuser.me/api?results=9&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }))
}

export default () => {
  const { tableProps } = useAntdTable(getTableData)
  const [visible, setVisible] = useState(false)
  const [initProps, setInitProps] = useState({})

  const edit = (record: any) => {
    setInitProps(record)
    setVisible(true)
  }
  const handleOk = () => {
    console.log('okkkkk')
    setVisible(false)
  }
  console.log('tableProps', tableProps)
  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'handle',
      render: (_: any, record: any) => (
        <Button type='primary' onClick={() => edit(record)}>
          编辑
        </Button>
      ),
    },
  ]

  return (
    <div style={{ width: '100%' }}>
      <Table columns={columns} rowKey='email' scroll={{ y: 400 }} {...tableProps} />
      <EditModal visible={visible} initProps={initProps} onOk={handleOk} />
    </div>
  )
}
