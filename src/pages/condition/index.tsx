import React from 'react'
import { Table, Form, TreeSelect, Select, Button, Space, Input } from 'antd'
import { conditionNameTreeData, nameTypeOptions, nameTypeMap } from './mockdata'

interface ConditionProps {}

const Condition: React.FC<ConditionProps> = () => {
  const [form] = Form.useForm()
  return (
    <>
      <Table
        columns={[
          {
            title: '下游节点',
            dataIndex: 'actionName',
          },
          {
            title: '判断条件',
            dataIndex: 'condition',
          },
          {
            title: '分支描述',
            dataIndex: 'actionDesc',
          },
        ]}
        dataSource={[
          {
            key: '1',
            actionName: '下游节点Name1',
            actionDesc: '下游节点Desc1',
            conditionType: [
              {
                conditionName: '收货地址',
                conditionType: '且',
                conditionValue: '123',
                conditionLeftValue: '',
                conditionRightValue: '',
                direction: '',

                operator: '属于', // 介于、不介于
              },
            ],
            desc: '123',
          },
        ]}
        pagination={false}
      />

      <br />

      <Space>
        <Button
          type='primary'
          ghost
          onClick={() => {
            form.setFieldsValue({
              condition: [...(form.getFieldValue('condition') || []), {}],
            })
          }}
        >
          添加条件(且)
        </Button>
        <Button
          type='primary'
          onClick={async () => {
            const values = await form.validateFields()
            console.log('🚀 ~ onClick={ ~ values:', values)
          }}
        >
          提交
        </Button>
      </Space>

      <Form form={form} layout='inline' style={{ flexDirection: 'column', gap: 10 }}>
        <Form.List name='condition'>
          {(fields, { remove }) => (
            <>
              {fields.map(({ key, name }) => (
                <Space key={key}>
                  <Form.Item name={[name, 'conditionName']} noStyle>
                    <TreeSelect
                      style={{ width: 200 }}
                      treeData={conditionNameTreeData}
                      treeExpandAction='click'
                    />
                  </Form.Item>
                  <Form.Item name={[name, 'nameType']} noStyle>
                    <Select
                      style={{ width: 100 }}
                      options={nameTypeOptions}
                      onChange={(nameType) => {
                        const { value } = nameTypeMap[nameType][0] || {}
                        form.setFields([{ name: ['condition', name, 'operator'], value }])
                      }}
                    />
                  </Form.Item>
                  <Form.Item noStyle dependencies={[['condition', name, 'nameType']]}>
                    {({ getFieldValue }) => {
                      const nameType = getFieldValue(['condition', name, 'nameType'])
                      const options = nameTypeMap[nameType] || []

                      return (
                        <Form.Item noStyle name={[name, 'operator']}>
                          <Select style={{ width: 100 }} options={options} />
                        </Form.Item>
                      )
                    }}
                  </Form.Item>
                  <Form.Item
                    dependencies={[
                      ['condition', name, 'nameType'],
                      ['condition', name, 'operator'],
                    ]}
                    noStyle
                  >
                    {({ getFieldValue }) => {
                      const nameType = getFieldValue(['condition', name, 'nameType'])
                      const operator = getFieldValue(['condition', name, 'operator'])
                      const { valueInputType } =
                        nameTypeMap[nameType]?.find((item: any) => item.value === operator) || {}

                      if (valueInputType !== 'input') return null
                      return (
                        <Form.Item noStyle name={[name, 'conditionValue']}>
                          <Input />
                        </Form.Item>
                      )
                    }}
                  </Form.Item>
                  {/* <Form.Item
                    dependencies={[
                      ['condition', name, 'nameType'],
                      ['condition', name, 'operator'],
                    ]}
                    noStyle
                  >
                    {({ getFieldValue }) => {
                      const nameType = getFieldValue(['condition', name, 'nameType'])
                      const operator = getFieldValue(['condition', name, 'operator'])
                      const { valueInputType } =
                        nameTypeMap[nameType]?.find((item: any) => item.value === operator) || {}

                      if (valueInputType !== 'rangeNumber') return null
                      return (
                        <Form.Item noStyle name={[name, 'conditionValue']}>
                          <Input />
                        </Form.Item>
                      )
                    }}
                  </Form.Item> */}

                  <Button type='link' onClick={() => remove(name)}>
                    删除
                  </Button>
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form>
    </>
  )
}

export default Condition
