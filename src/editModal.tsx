import { Modal } from "antd"
import { isEmpty } from "lodash-es"

interface EditModalProps {
  open: boolean
  onOk: () => void
  onCancel: () => void
  initProps: Record<string, any>
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { open, onOk, onCancel, initProps } = props

  return (
    <Modal
      open={open}
      title={isEmpty(initProps) ? "新增" : "编辑"}
      onOk={onOk}
      onCancel={onCancel}
    >
      this is a modal, initProps: {initProps.email}
    </Modal>
  )
}

export default EditModal
