import className from 'classnames'
import * as React from 'react'

import IButton from './IButton'

import './Button.css'

class Button extends React.PureComponent<IButton, any> {
  constructor (props: IButton) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      showLoader: false
    }
  }

  public handleClick () {
    const { onClick } = this.props
    if (onClick) {
      onClick()
    }
  }

  public render () {
    const {
      // clear,
      // disabled,
      // icon,
      // outline,
      value
    } = this.props

    return (
      <div
        className={className({
          'Button--wrapper': true
        })}>
        { value }
      </div>
    )
  }
}

export default Button
