import IDefaultTypes from 'UTILS/default-types'

export default interface IMenuButton extends Partial<IDefaultTypes> {
  children: any,
  icon: string,
  noBounds?: boolean,
  offsetX?: number | string,
  offsetY?: number | string,
}
