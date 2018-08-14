import IImgSquare from '../ImgSquare/IImgSquare'

export default interface ISlideImg {
  images: IImgSquare[]
  note?: boolean,
  subtitle?: boolean,
  title?: string
}
