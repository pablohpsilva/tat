import IDefaultTypes from 'UTILS/default-types'

export default interface IImgSquare extends Partial<IDefaultTypes> {
  editable?: boolean,
  text?: string,
  sidetext?: string,
  onClick?: (event: any) => void,
  src?: string,
}
