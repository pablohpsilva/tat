// import IMenuItem from '../MenuItem/IMenuItem'

export default interface IMenu {
  active: boolean,
  // items: IMenuItem[],
  // onClick: (item: IMenuItem, index: number) => void,
  offsetX: number,
  offsetY: number,
  onClick: () => void,
  separator: boolean,
  zebra: boolean
}
