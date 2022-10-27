import React, { lazy, useState, Suspense } from 'react'
import { Button, Table, Modal } from 'antd'
import { useAntdTable } from 'ahooks'
// import 'antd/es/upload/style/index.less'
// import 'antd/es/button/style/index.less'
// import EditModal from './editModal'
import { openModal } from './utils'

const EditModal = lazy(() => import('./editModal'))

interface CustomModalProps {
  initProps: any
}

export default () => {
  const [open, setOpen] = useState(false)
  const handleOk = () => {
    setOpen(false)
  }
  const edit = (record?: any) => {
    openModal(EditModal, {
      initProps: record || {},
      onOk: handleOk,
    })
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
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
      title: 'handle',
      render: (_: any, record: any) => (
        <Button type='primary' onClick={() => edit(record)}>
          编辑
        </Button>
      ),
    },
  ]
  const data = [
    {
      name: 'zs',
      email: 'laksdjf',
      phone: '121212',
    },
    {
      name: 'ls',
      email: 'laksdj2f',
      phone: '121212',
    },
  ]
  return (
    <div className='w-full'>
      <Suspense fallback='loading...'>
        <EditModal open={open} onOk={handleOk} onCancel={() => setOpen(false)} initProps={{}} />
      </Suspense>
      <Button type='primary' onClick={() => setOpen(true)}>
        新增
      </Button>
      <Table columns={columns} dataSource={data} rowKey='email' scroll={{ y: 400 }} />
    </div>
  )
}
