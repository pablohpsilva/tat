export default interface IModal {
  backdrop: boolean,
  show: boolean,
  onClose?: () => void,
  onOpen?: () => void
}
