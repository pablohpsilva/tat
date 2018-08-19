import className from 'classnames'
import * as React from 'react'

import IInput from './IInput'

import './Input.css'

class Input extends React.Component<IInput, any> {
  public static defaultProps = {
    disabled: false,
    label: '',
    outline: false,
    placeholder: '',
    type: 'text',
    value: ''
  }

  constructor (props: IInput) {
    super(props)
  }

  public render() {
    const {
      disabled,
      label,
      onChange,
      outline,
      placeholder,
      type,
      value
    } = this.props

    return (
      <div
        className={className({
          'Input--wrapper': true,
          'Input--wrapper-outline': outline
        })}>
        {
          label && <label className="Input--label">{label}</label>
        }
        <input
          className="Input--text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          type={type}
          onChange={onChange || (() => ({}))}/>
      </div>
    );
  }
}

export default Input


