import className from 'classnames'
import * as React from 'react'
import { readAsDataURL } from 'UTILS/file'

import TextTitle from 'COMP/TextTitle'
import IImgSquare from './IImgSquare'

import './ImgSquare.css'

class ImgSquare extends React.PureComponent<IImgSquare, any> {
  public static defaultProps = {
    disabled: false
  }

  constructor(props: IImgSquare) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.triggerInputFile = this.triggerInputFile.bind(this)
    this.handleOnChangeInputFile = this.handleOnChangeInputFile.bind(this)
  }

  public triggerInputFile() {
    if (this.props.disabled) {
      return
    }

    const input: HTMLElement = document.querySelector('input.ImgSquare--input') as HTMLElement
    if (input) {
      input.click()
    }
  }

  public handleOnChangeInputFile(event: any) {
    const { onClick } = this.props
    if (onClick) {
      readAsDataURL(event)
        .then(({ result }) => {
          if (!result || result.indexOf('data:image') === -1) {
            return
          }
          onClick(result)
        })
    }
  }

  public handleOnClick (event: any) {
    const { onClick } = this.props
    if (onClick) {
      onClick(event)
    }
  }

  public render () {
    const {
      className: propClassName,
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
        className={
          className(
            propClassName,
            {
              'ImgSquare--wrapper': true,
              'ImgSquare--wrapper-disabled': disabled,
            }
          )
        }
        onClick={!disabled ? this.triggerInputFile : this.handleOnClick}>
        {/* onClick={this.handleOnClick}> */}
        <div
          className="ImgSquare--image"
          style={{
            backgroundImage: `url(${src})`
          }}>
          <input
            hidden={true}
            className="ImgSquare--input"
            onChange={this.handleOnChangeInputFile}
            disabled={disabled}
            type="file" />
        </div>
          {
            lowerText
          }
      </div>
    )
  }
}

export default ImgSquare
