import className from 'classnames'
import * as React from 'react'

import IMenuItem from './IMenuItem'

import './MenuItem.css'

class MenuItem extends React.PureComponent<IMenuItem, any> {
  public static defaultProps = {
    disabled: false,
    icon: '',
    value: '',
  }

  constructor(props: IMenuItem) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }


  public handleClick () {
    const { onClick } = this.props
    if (onClick) {
      onClick(() => ({}))
    }
  }

  public render () {
    const {
      disabled,
      icon,
      value,
    } = this.props

    return (
      <button
        className={className({
          'MenuItem--wrapper': true,
          'MenuItem--wrapper-disabled': disabled,
        }
        )}
        disabled={disabled}
        onClick={this.handleClick}>
        <img
          className="MenuItem--icon"
          src={icon}
          alt={`item ${value}`}/>
        <span
          className="MenuItem--text">
          { value }
        </span>
      </button>
    )
  }
}

export default MenuItem
