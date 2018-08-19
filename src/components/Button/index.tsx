import className from 'classnames'
import * as React from 'react'

import IButton from './IButton'

import './Button.css'

import loadingPulseImage from '../../static/img/loading.svg'

class Button extends React.PureComponent<IButton, any> {
  public static defaultProps = {
    block: false,
    clear: false,
    disabled: false,
    icon: false,
    loader: false,
    outline: false,
    value: ''
  }

  constructor (props: IButton) {
    super(props)

    this.state = {
      id: `button-${Math.random().toString(36).slice(4)}`,
      showLoader: false,
      width: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.emitLoader = this.emitLoader.bind(this)
    this.dismissLoader = this.dismissLoader.bind(this)
  }

  public emitLoader () {
    this.setState((state: any) => Object.assign({}, state, { showLoader: true }))
  }

  public dismissLoader () {
    this.setState((state: any) => Object.assign({}, state, { showLoader: false }))
  }

  public handleClick () {
    const { loader, onClick } = this.props
    const { showLoader } = this.state
    if (onClick && !showLoader) {
      if (loader) {
        this.emitLoader()
        return onClick(this.dismissLoader)
      }

      return onClick(() => ({}))
    }
  }

  public componentDidMount () {
    const button = document.querySelector(`#${this.state.id}`)
    if (button) {
      const width = button.getBoundingClientRect().width
      this.setState((state: any) => Object.assign({}, state, { width }))
    }
  }

  public render () {
    const {
      block,
      clear,
      disabled,
      children,
      icon,
      outline,
      loader,
      value
    } = this.props

    const {
      id,
      showLoader,
      width
    } = this.state

    const content = icon
      ? (<img
          className="Button--icon"
          src={value}
          alt="here" />)
      : !!value
        ? value
        : children

    return (
      <button
        id={id}
        disabled={disabled}
        className={className({
          'Button--wrapper': true,
          'Button--wrapper-block': block,
          'Button--wrapper-clear': clear,
          'Button--wrapper-disabled': disabled,
          'Button--wrapper-icon': icon,
          'Button--wrapper-outline': outline,
        })}
        style={{
          width: width || 'auto'
        }}
        onClick={this.handleClick}>
        {
          (loader && showLoader)
            ? <img
                className="Button--icon"
                src={loadingPulseImage}
                alt="here" />
            : content
        }
      </button>
    )
  }
}

export default Button
