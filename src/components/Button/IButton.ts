import IDefaultTypes from 'UTILS/default-types'

export default interface IButton extends Partial<IDefaultTypes> {
  block: boolean,
  clear: boolean,
  icon: boolean,
  loader: boolean,
  onClick: (callback: () => void) => void,
  noBounds: boolean,
  outline: boolean,
  to?: string,
  value: string,
}
