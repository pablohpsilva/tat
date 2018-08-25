import IDefaultTypes from 'UTILS/default-types'

export default interface ITextTitle extends Partial<IDefaultTypes> {
  invert: boolean,
  note: boolean,
  onClick?: (value: any) => void,
  subtitle: boolean,
  title: boolean,
  value: any
}
