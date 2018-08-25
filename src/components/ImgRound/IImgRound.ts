import IDefaultTypes from 'UTILS/default-types'

export default interface IImgRound extends Partial<IDefaultTypes> {
  alt?: string,
  icon?: boolean,
  onChange?: (result: string) => void,
  src?: string,
}
