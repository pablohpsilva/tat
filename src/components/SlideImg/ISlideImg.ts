import IImgSquare from '../ImgSquare/IImgSquare'

export default interface ISlideImg {
  images: IImgSquare[],
  noDataText: string,
  note: boolean,
  onClick: (img: IImgSquare, index: number, result: any) => void,
  subtitle: boolean,
  title: string
}
