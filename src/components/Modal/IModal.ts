import IDefaultTypes from 'UTILS/default-types'

export default interface IModal extends Partial<IDefaultTypes> {
  backdrop: boolean,
  show: boolean,
  onClose?: () => void,
  onOpen?: () => void
}
