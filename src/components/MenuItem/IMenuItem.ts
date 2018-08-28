import IDefaultTypes from 'UTILS/default-types'

export default interface IMenuItem extends Partial<IDefaultTypes>{
  icon: string,
  onClick: (callback: any) => void,
  name: string,
  to?: string,
  value: string,
}
