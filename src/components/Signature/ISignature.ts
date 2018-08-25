import IDefaultTypes from 'UTILS/default-types'

export default interface ISignature extends Partial<IDefaultTypes> {
  readonly label?: string,
  onChange?: (value: string | number) => void,
  onClick?: () => void,
  outline?: boolean,
  placeholder?: string,
  value?: any
}
