import className from 'classnames'
import * as React from 'react'

import TextTitle from '../TextTitle'
import IImgSquare from './IImgSquare'

import './ImgSquare.css'

class ImgSquare extends React.PureComponent<any, IImgSquare> {
  constructor(props: IImgSquare) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  public handleOnClick (event: any) {
    const { onClick } = this.props
    if (onClick) {
      onClick(event)
    }
  }

  public render () {
    const {
      disabled,
      text,
      sidetext,
      src
    } = this.props

    const lowerText = (
      <div
        className="ImgSquare--info">
        {
          text &&
            <TextTitle
              value={text}
              note={true} />
        }
        {
          <TextTitle
            value={(text && sidetext) ? ' - ' : ''}
            note={true} />
        }
        {
          text && sidetext &&
            <TextTitle
              value={sidetext}
              note={true} />
        }
      </div>
    )

    return (
      <div
        className={className({
          'ImgSquare--wrapper': true,
          'ImgSquare--wrapper-disabled': disabled,
        })}
        onClick={this.handleOnClick}>
        <div
          className="ImgSquare--image"
          style={{
            backgroundImage: `url(${src})`
          }}/>
        {
          lowerText
        }
      </div>
    )
  }
}

export default ImgSquare
