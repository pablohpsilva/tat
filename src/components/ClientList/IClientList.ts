import IClientItem from 'COMP/ClientItem/IClientItem'
import IDefaultTypes from 'UTILS/default-types'

export default interface IClientList extends Partial<IDefaultTypes>{
  items: IClientItem[],
  noDataText: string,
  note: boolean,
  onClick: (item: IClientItem, index: number) => void,
  subtitle: boolean,
  title: string
}
