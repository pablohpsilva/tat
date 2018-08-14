import * as React from 'react'

import ImgSquare from '../ImgSquare'
import TextTitle from '../TextTitle'

import IImgSquare from '../ImgSquare/IImgSquare'
import ISlideImg from './ISlideImg'

import './SlideImg.css'

class SlideImg extends React.PureComponent<ISlideImg, any> {
  public static defaultProps = {
    images: [],
    note: false,
    subtitle: false,
    title: ''
  }

  public handleImgSquareClick = (img: IImgSquare, index: number) => () => {
    const { onClick } = this.props
    if (onClick) {
      onClick(img, index)
    }
  }

  public render () {
    const {
      images,
      title,
      note,
      subtitle,
    } = this.props

    return (
      <div
        className="SlideImg--wrapper">
        {
          title &&
            <TextTitle
              value={title}
              note={note}
              subtitle={subtitle}/>
          }
        {
          images.map((img: IImgSquare, index: number) => (
            <ImgSquare
              key={`imgSquare-${index}`}
              onClick={this.handleImgSquareClick(img, index)}
              {...img} />
          ))
        }
      </div>
    )
  }
}

export default SlideImg
