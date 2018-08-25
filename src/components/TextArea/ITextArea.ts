import IDefaultTypes from 'UTILS/default-types'

export default interface ITextArea extends Partial<IDefaultTypes> {
  readonly placeholder?: string,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: (value: string | number) => void,
  onFocus?: () => void,
  outline?: boolean,
  readonly disabled?: boolean,
  value?: any
}
