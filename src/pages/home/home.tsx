import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Modal } from "antd"
// import withLeavePrompt from '../../utils/withLeavePrompt.jsx'

const Home: React.FC = () => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log("values", values)
  }

  const linkTo = (path: string) => {
    navigate(path)
  }

  const handleTheme = () => {
    const result = document.documentElement.classList.toggle("dark")
    if (result) {
      localStorage.setItem("color-schema", "dark")
    } else {
      localStorage.removeItem("color-schema")
    }
  }
  return (
    <div className="h-full w-full">
      <div className=" mb-2 w-1/4 p-4 shadow-md">
        <Button onClick={() => linkTo("/")}>/</Button>
        <Button onClick={() => linkTo("/list")}>/list</Button>
      </div>

      <Button onClick={handleTheme}>toggle theme</Button>
      <p className=" text-black dark:text-white">以下是一段文本内容</p>

      {/* <Button onClick={() => setOpen(true)}>open Modal</Button> */}
      <div className="w-1/4 py-2 px-4 shadow-md">
        <Form
          form={form}
          name="demo form"
          scrollToFirstError
          onFinish={onFinish}
        >
          <Form.Item name="userName" label="userName">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              确定1234
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Home
