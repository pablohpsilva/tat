// import IMenuItem from '../MenuItem/IMenuItem'

export default interface IMenuButton {
  children: any,
  icon: string,
  noBounds?: boolean,
  offsetX?: number | string,
  offsetY?: number | string,
  // onClick: (item: IMenuItem, index: number) => void,
}
