import IDefaultTypes from 'UTILS/default-types'
export default interface IInput extends Partial<IDefaultTypes> {
  readonly clearAble?: boolean,
  readonly label?: string,
  onBlur?: () => void,
  onChange?: (value: string | number) => void,
  onFocus?: () => void,
  outline?: boolean,
  readonly placeholder?: string,
  value?: any,
  type?: string
}
