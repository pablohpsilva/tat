export default interface IClientList {
  image?: string,
  lastVisit: Date,
  lastPurchase: string,
  name: string,
  phone: string,
  onClick: () => void
}
