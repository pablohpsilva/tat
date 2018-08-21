import className from 'classnames'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import MenuItem from '../MenuItem'
import IMenuItem from '../MenuItem/IMenuItem'
import IMenu from './IMenu'

import './Menu.css'

const menuRoot = document.querySelector('#menu-root')

class Menu extends React.Component<IMenu, any> {
  public static defaultProps = {
    items: [],
    separator: false,
    zebra: false
  }

  private root: HTMLElement
  private content: HTMLElement

  constructor(props: IMenu) {
    super(props);

    this.state = {
      active: false
    }

    this.root = document.createElement('div')
    this.content = document.createElement('div')

    this.handleClick = this.handleClick.bind(this)
    this.handleMenuVisibility = this.handleMenuVisibility.bind(this)
  }

  public handleClick = (item: IMenuItem, index: number) => () => {
    const { onClick } = this.props
    if (onClick) {
      onClick(item, index)
    }
  }

  public handleMenuVisibility () {
    this.setState((state: any) => Object.assign({}, state, { active: !state.active }))
  }

  public componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    if (menuRoot) {
      menuRoot.appendChild(this.root)
    }
  }

  public componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    if (menuRoot) {
      menuRoot.removeChild(this.root)
    }
  }

  public render () {
    const {
      separator,
      zebra
    } = this.props

    const { active } = this.state

    this.root.setAttribute('class', className({
      'Menu--wrapper': true
    }))

    this.content.setAttribute('class', className({
      'Menu--content': true,
      'Menu--content-separator': separator,
      'Menu--content-zebra': zebra,
    }))

    this.root.appendChild(this.content)

    return active && ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.root,
    )

    // return (
    //   <div
    //     className={className({
    //       'Menu--wrapper': true,
    //       'Menu--wrapper-separator': separator,
    //       'Menu--wrapper-zebra': zebra,
    //     })}>
    //     {
    //       items.map((item: IMenuItem, index: number) => (
    //         <MenuItem
    //           key={`menuItem-${index}`}
    //           onClick={this.handleClick(item, index)}
    //           {...item}/>
    //       ))
    //     }
    //   </div>
    // )
  }
}

export default Menu
