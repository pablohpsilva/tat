export default interface IInput {
  readonly placeholder?: string,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: ({ target: { value: inputVal } }: { target: { value: any } }) => void,
  onFocus?: () => void,
  outline?: boolean,
  readonly disabled?: boolean,
  value?: any,
  type?: string
}
