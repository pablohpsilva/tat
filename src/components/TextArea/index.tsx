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
  }

  public render() {
    const {
      disabled,
      label,
      onChange,
      outline,
      placeholder,
      value
    } = this.props

    return (
      <div
        className={className({
          'TextArea--wrapper': true,
          'TextArea--wrapper-outline': outline
        })}>
        {
          label && <label className="TextArea--label">{label}</label>
        }
        <textarea
          className="TextArea--text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange || (() => ({}))}/>
      </div>
    );
  }
}

export default TextArea


