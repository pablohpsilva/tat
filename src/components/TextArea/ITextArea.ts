export default interface ITextArea {
  readonly placeholder?: string,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: (value: string | number) => void,
  onFocus?: () => void,
  outline?: boolean,
  readonly disabled?: boolean,
  value?: any
}
