import className from 'classnames'
import * as React from 'react'

import MenuItem from '../MenuItem'
import IMenuItem from '../MenuItem/IMenuItem'
import IMenu from './IMenu'

import './Menu.css'

class Menu extends React.Component<IMenu, any> {

  public static defaultProps = {
    items: [],
    separator: false,
    zebra: false
  }

  constructor(props: IMenu) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick = (item: IMenuItem, index: number) => () => {
    const { onClick } = this.props
    if (onClick) {
      onClick(item, index)
    }
  }

  public render () {
    const {
      items,
      separator,
      zebra
    } = this.props

    return (
      <div
        className={className({
          'Menu--wrapper': true,
          'Menu--wrapper-separator': separator,
          'Menu--wrapper-zebra': zebra,
        })}>
        {
          items.map((item: IMenuItem, index: number) => (
            <MenuItem
              key={`menuItem-${index}`}
              onClick={this.handleClick(item, index)}
              {...item}/>
          ))
        }
      </div>
    )
  }
}

export default Menu
