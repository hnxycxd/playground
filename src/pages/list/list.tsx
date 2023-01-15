import React, { useEffect } from "react"
import { Form, Button, Table, Input } from "antd"
// import { getstrbyte } from "rookie-utils"

const List = () => {
  const [form] = Form.useForm()

  const onFinish = () => {
    const values = form.getFieldsValue()
    console.log("values", values)
  }
  useEffect(() => {
    // fetch("http://localhost:8090/demo/get")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("res", res)
    //   })
  })
  // console.log("rookieUtils", getstrbyte("abcde"))
  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="姓名" name="name">
          <Button htmlType="submit">搜索</Button>
        </Form.Item>
      </Form>
      {/* <Table data={data} pagination={{ page: page }}></Table> */}
      <input type="radio" name="gp1" id="" />A
      <input type="radio" name="gp1" id="" />B
      <input type="radio" name="gp1" id="" />C
    </>
  )
}

export default List
