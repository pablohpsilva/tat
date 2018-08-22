import className from 'classnames'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import MenuItem from '../MenuItem'
// import IMenuItem from '../MenuItem/IMenuItem'
import IMenu from './IMenu'

import './Menu.css'

const menuRoot = document.querySelector('#menu-root')

class Menu extends React.Component<IMenu, any> {
  public static defaultProps = {
    // items: [],
    offsetX: 0,
    offsetY: 0,
    onClick: () => { console.log(1) },
    separator: false,
    zebra: false
  }

  private root: HTMLElement

  constructor(props: IMenu) {
    super(props);

    this.root = document.createElement('div')

    this.getMenu = this.getMenu.bind(this)
    this.getMenuElement = this.getMenuElement.bind(this)
    this.setInnerMenuAttributes = this.setInnerMenuAttributes.bind(this)
  }

  public setInnerMenuAttributes () {
    window.setTimeout(() => {
      this.getMenu().addEventListener('click', this.props.onClick)
    }, 0)
    const {
      offsetX,
      offsetY
    } = this.props
    // const documentHeight = document.documentElement.offsetHeight
    this.getMenuElement().style.left = `${offsetX}`
    this.getMenuElement().style.top = `${offsetY}`
  }

  public getMenu (): HTMLElement {
    const element: HTMLElement = document.querySelector('.Menu--backdrop') as HTMLElement
    return element || this.root
  }

  public getMenuElement (): HTMLElement {
    const element: HTMLElement = document.querySelector('.Menu--wrapper > div:not(.Menu--backdrop)') as HTMLElement
    return element || this.root
  }

  public componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    if (menuRoot) {
      this.setInnerMenuAttributes()
      menuRoot.appendChild(this.root)
    }
  }

  public componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    if (menuRoot) {
      this.getMenuElement().removeEventListener('click', () => ({}))
      menuRoot.removeChild(this.root)
    }
  }

  public render () {
    const {
      active,
      separator,
      zebra
    } = this.props

    this.root.setAttribute('class', className({
      'Menu--wrapper': true,
      'Menu--wrapper-separator': separator,
      'Menu--wrapper-visible': active,
      'Menu--wrapper-zebra': zebra,
    }))

    const backdrop = document.createElement('div')
    backdrop.setAttribute('class', 'Menu--backdrop')

    this.root.appendChild(backdrop)

    return active && ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.root,
    )
  }
}

export default Menu
