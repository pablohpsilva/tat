import IDefaultTypes from 'UTILS/default-types'

export default interface IAutocomplete extends Partial<IDefaultTypes> {
  clearAble?: boolean,
  readonly label?: string,
  onChange?: (value: any) => void,
  onSelect?: (value: any) => void,
  outline?: boolean,
  readonly placeholder?: string,
  value?: string | number
}
