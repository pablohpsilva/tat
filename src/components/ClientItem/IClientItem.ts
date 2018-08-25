import IDefaultTypes from 'UTILS/default-types'
export default interface IClientList extends Partial<IDefaultTypes> {
  image?: string,
  lastVisit: Date,
  lastPurchase: string,
  phone: string,
  onClick: () => void
}
