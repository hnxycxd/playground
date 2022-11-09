import type { UploadProps } from 'antd'
import { Button, message, Upload } from 'antd'
import React from 'react'
import request from '@/request'

const props: UploadProps = {
  multiple: true,
  name: 'file',
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  action: 'https://10.25.92.91:8080/file/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const List: React.FC = () => {
  const handleUpload = (e: any) => {
    // console.log('e', e.target.files)
    request({
      url: 'https://10.25.92.91:8080/file/upload',
    })
  }
  return (
    <>
      <Upload {...props}>
        <Button>Click to Upload</Button>
      </Upload>
      <input type='file' onChange={handleUpload} multiple />
    </>
  )
}

export default List
