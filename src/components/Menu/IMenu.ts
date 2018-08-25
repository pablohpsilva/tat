export default interface IMenu {
  active: boolean,
  offsetX: number | string,
  offsetY: number | string,
  onClick: () => void,
  separator: boolean,
  zebra: boolean
}
