import * as React from 'react'

import Button from '../Button'
import Menu from '../Menu'

import IMenuButton from './IMenuButton'

const uuid = () => Math.random().toString(36).slice(4)

class MenuButton extends React.PureComponent<IMenuButton, any> {
  constructor (props: IMenuButton) {
    super(props)

    this.state = {
      active: false,
      id: `MenuButton-${uuid()}`,
      offsetX: 0,
      offsetY: 0,
    }

    this.getHorizontalOffset = this.getHorizontalOffset.bind(this)
    this.handleMenuVisibility = this.handleMenuVisibility.bind(this)
    this.setOffset = this.setOffset.bind(this)
  }

  public handleMenuVisibility() {
    this.setState((state: any) => Object.assign({}, state, { active: !state.active }))
  }

  public getHorizontalOffset (element: HTMLElement, renderedElementWidth = 250) {
    const documentWidth = document.documentElement.offsetWidth
    const elementOffsetLeft = element.offsetLeft
    const elementOffsetRight = documentWidth - element.offsetLeft

    const offsetHorizontal = (elementOffsetLeft > elementOffsetRight)
      ? elementOffsetLeft
      : elementOffsetRight

    return offsetHorizontal - (renderedElementWidth/2)
  }

  public setOffset () {
    const { id } = this.state
    const button: HTMLElement = document.querySelector(`#${id}`) as HTMLElement
    if (button) {
      this.setState((state: any) => Object.assign({}, state, {
        offsetX: this.getHorizontalOffset(button),
        offsetY: button.offsetTop + 8,
      }))
    }
  }

  public componentDidMount () {
    this.setOffset()
  }

  public render () {
    const {
      children,
      icon,
      noBounds,
      offsetX,
      offsetY
    } = this.props
    const {
      active,
      id,
      offsetX: defaultOffsetX,
      offsetY: defaultOffsetY
    } = this.state

    return (
      <div>
        <Button
          id={id}
          icon={true}
          onClick={this.handleMenuVisibility}
          noBounds={noBounds}
          value={icon} />
        {
          active &&
            <Menu
              onClick={this.handleMenuVisibility}
              active={active}
              separator={false}
              zebra={false}
              offsetX={offsetX || defaultOffsetX}
              offsetY={offsetY || defaultOffsetY}>
              {children}
            </Menu>
        }
      </div>
    )
  }
}

export default MenuButton
