import * as React from 'react'

import ImgSquare from 'COMP/ImgSquare'
import TextTitle from 'COMP/TextTitle'

import IImgSquare from 'COMP/ImgSquare/IImgSquare'
import ISlideImg from './ISlideImg'

import './SlideImg.css'

import addIcon from 'STATIC/img/add_black.svg'

class SlideImg extends React.Component<ISlideImg, any> {
  public static defaultProps = {
    addable: false,
    images: [],
    noDataText: 'No data found',
    note: false,
    subtitle: false,
    title: ''
  }

  public handleImgSquareClick = (img: IImgSquare, index: number) => (result: any) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(img, index, result)
    }
  }

  public render () {
    const {
      addable,
      images,
      noDataText,
      note,
      title,
      subtitle,
    } = this.props

    const renderTitle = title &&
      <TextTitle
        value={title}
        note={note}
        subtitle={subtitle} />

    const renderContent = (images && images.length)
      ? images.map((img: IImgSquare, index: number) => (
        <ImgSquare
          key={`imgSquare-${index}`}
          onClick={this.handleImgSquareClick(img, index)}
          {...img} />
      ))
      : (
        <div
          className="SlideImg--noData">
          <span>{noDataText}</span>
        </div>
      )

    const renderAddAble = addable &&
      <ImgSquare
        className="SlideImg--addAble"
        src={addIcon}
        onClick={this.handleImgSquareClick({ }, -1)}/>

    return (
      <div
        className="SlideImg--wrapper">
        {
          renderTitle
        }
        <div
          className="SlideImg--content">
          {
            renderContent
          }
          {
            renderAddAble
          }
        </div>
      </div>
    )
  }
}

export default SlideImg
