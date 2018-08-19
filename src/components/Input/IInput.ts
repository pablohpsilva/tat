export default interface IInput {
  readonly clearAble?: boolean,
  readonly disabled?: boolean,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: (value: string | number) => void,
  onFocus?: () => void,
  outline?: boolean,
  readonly placeholder?: string,
  value?: any,
  type?: string
}
