export default interface IButton {
  clear: boolean,
  disabled: boolean,
  icon: boolean,
  loader: boolean,
  onClick: (callback: () => void) => void,
  outline: boolean,
  value: string,
}
