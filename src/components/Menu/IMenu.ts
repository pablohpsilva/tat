// import IMenuItem from '../MenuItem/IMenuItem'

export default interface IMenu {
  active: boolean,
  // items: IMenuItem[],
  // onClick: (item: IMenuItem, index: number) => void,
  offsetX: number | string,
  offsetY: number | string,
  onClick: () => void,
  separator: boolean,
  zebra: boolean
}
