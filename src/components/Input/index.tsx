import className from 'classnames'
import * as React from 'react'

import closeImage from '../../static/img/add.svg'
import IInput from './IInput'

import './Input.css'

class Input extends React.PureComponent<IInput, {}> {
  public static defaultProps = {
    clearAble: false,
    disabled: false,
    label: '',
    outline: false,
    placeholder: '',
    type: 'text',
    value: ''
  }

  constructor (props: IInput) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  public handleChange(value: string | number) {
    const { onChange } = this.props
    if (onChange) {
      onChange(value || '')
    }
  }

  public handleClick() {
    this.handleChange('')
  }

  public handleInputChange({ target: { value } }: { target: { value: string | number } }) {
    this.handleChange(value)
  }

  public render() {
    const {
      clearAble,
      disabled,
      label,
      outline,
      placeholder,
      style,
      type,
      value
    } = this.props

    return (
      <div
        className={className({
          'Input--wrapper': true,
          'Input--wrapper-outline': outline
        })}
        style={style}>
        {
          label &&
            <label
              className="Input--label">
              {label}
            </label>
        }
        <input
          className="Input--text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          type={type}
          onChange={this.handleInputChange}/>

        {
          clearAble &&
            <img
              onClick={this.handleClick}
              className="Input--clearAble"
              src={closeImage}
              alt="clear input" />
        }
      </div>
    );
  }
}

export default Input


