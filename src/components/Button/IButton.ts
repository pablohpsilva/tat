export default interface IButton {
  block: boolean,
  clear: boolean,
  disabled: boolean,
  icon: boolean,
  loader: boolean,
  onClick: (callback: () => void) => void,
  outline: boolean,
  value: string,
}
