import className from 'classnames'
import * as React from 'react'
import { readAsDataURL } from 'UTILS/file'

import IImgRound from './IImgRound'

import './ImgRound.css'

class ImgRound extends React.PureComponent<IImgRound, any> {
  constructor(props: IImgRound) {
    super (props)

    this.triggerInputFile = this.triggerInputFile.bind(this)
    this.handleOnChangeInputFile = this.handleOnChangeInputFile.bind(this)
  }

  public triggerInputFile () {
    if (this.props.disabled) {
      return
    }

    const input: HTMLElement = document.querySelector('input.ImgRound--input') as HTMLElement
    if (input) {
      input.click()
    }
  }

  public handleOnChangeInputFile (event: any) {
    const { onChange } = this.props
    if (onChange) {
      readAsDataURL(event)
        .then(({ result }) => {
          if (!result || result.indexOf('data:image') === -1) {
            return
          }
          onChange(result)
        })
    }
  }

  public render () {
    const {
      disabled,
      icon,
      src
    } = this.props

    return (
      <div
        className={className({
          'ImgRound--wrapper': true,
          'ImgRound--wrapper-disabled': disabled,
          'ImgRound--wrapper-icon': icon,
        })}
        style={{ backgroundImage: `url(${src})` }}
        onClick={this.triggerInputFile}>
        <input
          hidden={true}
          className="ImgRound--input"
          onChange={this.handleOnChangeInputFile}
          disabled={disabled}
          type="file"/>
      </div>
    )
  }
}

export default ImgRound
