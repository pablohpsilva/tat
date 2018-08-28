import className from 'classnames'
import Button from 'COMP/Button'
import * as React from 'react'

import IMenuItem from './IMenuItem'

import './MenuItem.css'

class MenuItem extends React.PureComponent<IMenuItem, any> {
  public static defaultProps = {
    disabled: false,
    icon: '',
    name: `MenuItem-${Math.random().toString(36).slice(4)}`,
    value: '',
  }

  constructor(props: IMenuItem) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick (callback: () => void) {
    const { onClick } = this.props
    if (onClick) {
      onClick(callback)
    }
  }

  public render () {
    const {
      disabled,
      icon,
      to,
      value,
    } = this.props

    return (
      <Button
        className={
          className({
            'MenuItem--wrapper': true,
            'MenuItem--wrapper-disabled': disabled,
          })
        }
        disabled={disabled}
        to={to}
        onClick={this.handleClick}>
        <img
          className="MenuItem--icon"
          src={icon}
          alt={`item ${value}`}/>
        <span
          className="MenuItem--text">
          { value }
        </span>
      </Button>
    )
  }
}

export default MenuItem
