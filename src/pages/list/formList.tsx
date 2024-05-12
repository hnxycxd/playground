import React from "react"
import { Form, Input, Button } from "antd"

const FormItem = Form.Item

const Ice = () => {
  const onFinish = (values: any) => {
    console.log("🚀 ~ file: ice.tsx:8 ~ onFinish ~ values", values)
  }
  return (
    <div
      className="h-full w-[600px] bg-gray-50  
  "
    >
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
      >
        <Form.List name="dynamicList">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <FormItem {...field} key={field.key}>
                  <Input />
                </FormItem>
              ))}
              <FormItem>
                <Button onClick={() => add("abc")}>ADD</Button>
              </FormItem>
            </>
          )}
        </Form.List>
        <FormItem>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default Ice
