import IDefaultTypes from 'UTILS/default-types'

export default interface IMenu extends Partial<IDefaultTypes> {
  active: boolean,
  offsetX: number | string,
  offsetY: number | string,
  onClick: () => void,
  separator: boolean,
  zebra: boolean
}
