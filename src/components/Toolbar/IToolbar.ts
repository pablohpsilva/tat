import IDefaultTypes from 'UTILS/default-types'

export default interface IToolbar extends Partial<IDefaultTypes> {
  alignRight?: boolean,
  alignCenter?: boolean,
  children: any,
  left?: boolean
}
