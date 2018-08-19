import IClientItem from '../ClientItem/IClientItem'

export default interface IClientList {
  items: IClientItem[],
  note: boolean,
  onClick: (item: IClientItem, index: number) => void,
  subtitle: boolean,
  title: string
}
