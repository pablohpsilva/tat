import className from 'classnames'
import * as React from 'react'

import ITextArea from './ITextArea'

import './TextArea.css'

class TextArea extends React.Component<ITextArea, any> {
  public static defaultProps = {
    disabled: false,
    label: '',
    outline: false,
    placeholder: '',
    value: ''
  }

  constructor(props: ITextArea) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  public handleChange({ target: { value } }: { target: { value: string | number } }) {
    const { onChange } = this.props
    if (onChange) {
      onChange(value || '')
    }
  }

  public render() {
    const {
      disabled,
      label,
      outline,
      placeholder,
      style,
      value
    } = this.props

    return (
      <div
        className={className({
          'TextArea--wrapper': true,
          'TextArea--wrapper-outline': outline
        })}
        style={style}>
        {
          label && <label className="TextArea--label">{label}</label>
        }
        <textarea
          className="TextArea--text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TextArea


