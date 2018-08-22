export default interface ISignature {
  readonly disabled?: boolean,
  readonly label?: string,
  onChange?: (value: string | number) => void,
  onClick?: () => void,
  outline?: boolean,
  placeholder?: string,
  style?: object,
  value?: any
}
