export default interface IMenuItem {
  disabled: boolean,
  icon: string,
  onClick: (callback: any) => void,
  value: string,
}
