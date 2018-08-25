import IImgSquare from 'COMP/ImgSquare/IImgSquare'
import IDefaultTypes from 'UTILS/default-types'

export default interface ISlideImg extends Partial<IDefaultTypes> {
  images: IImgSquare[],
  noDataText: string,
  note: boolean,
  onClick: (img: IImgSquare, index: number, result: any) => void,
  subtitle: boolean,
  title: string
}
