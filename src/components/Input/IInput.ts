export default interface IInput {
  readonly placeholder?: string,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: () => void,
  onFocus?: () => void,
  readonly disabled?: boolean,
  value?: any,
  type?: string
}
