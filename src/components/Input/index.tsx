import * as React from 'react'

import IInput from './IInput'

import './Input.css'

class Input extends React.Component<any, IInput> {
  constructor (props: IInput) {
    super(props)
  }

  public render() {
    const {
      disabled,
      label,
      onChange,
      placeholder,
      type,
      value
    } = this.props

    return (
      <div
        className="Input--wrapper">
        {
          label && <label className="Input--label">{label}</label>
        }
        <input
          className="Input--text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          type={type || 'text'}
          onChange={onChange || (() => ({}))}/>
      </div>
    );
  }
}

export default Input


