export default interface ISelect {
  options: object[],
  onClick: (value: string | object) => void,
  value: string | object,
}
