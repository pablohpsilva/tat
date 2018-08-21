export default interface IButton {
  block: boolean,
  className?: string,
  clear: boolean,
  disabled: boolean,
  icon: boolean,
  loader: boolean,
  onClick: (callback: () => void) => void,
  noBounds: boolean,
  outline: boolean,
  style?: object,
  value: string,
}
