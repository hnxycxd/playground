import { Modal } from 'antd'
import { isEmpty } from 'lodash-es'

interface EditModalProps {
  visible: boolean
  onOk: () => void
  initProps: Record<string, any>
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { visible, onOk, initProps } = props

  return (
    <Modal visible={visible} title={isEmpty(initProps) ? '新增' : '编辑'} onOk={onOk}>
      this is a modal, initProps: {initProps.gender}
    </Modal>
  )
}

export default EditModal
