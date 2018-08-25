import IClientItem from 'COMP/ClientItem/IClientItem'

export default interface IClientList {
  items: IClientItem[],
  noDataText: string,
  note: boolean,
  onClick: (item: IClientItem, index: number) => void,
  subtitle: boolean,
  title: string
}
