import IImgSquare from '../ImgSquare/IImgSquare'

export default interface ISlideImg {
  images: IImgSquare[],
  note: boolean,
  onClick: (img: IImgSquare, index: number) => void,
  subtitle: boolean,
  title: string
}
