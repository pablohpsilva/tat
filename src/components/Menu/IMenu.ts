import IMenuItem from '../MenuItem/IMenuItem'

export default interface IMenu {
  items: IMenuItem[],
  onClick: (item: IMenuItem, index: number) => void,
  separator: boolean,
  zebra: boolean
}
