import classNames from 'classnames'
import * as React from 'react'

import ITextTitle from './ITextTitle'
import './TextTitle.css'

function getPresentationHTMLTag (subtitle: boolean, note: boolean) {
  if (subtitle) {
    return 'h3'
  }

  if (note) {
    return 'h5'
  }
  return 'h2'
}

class TextTitle extends React.PureComponent<ITextTitle, any> {
  public static defaultProps = {
    invert: false,
    note: false,
    subtitle: false,
    title: true,
    value: ''
  }

  constructor (props: ITextTitle) {
    super(props)
  }

  public render () {
    const {
      invert,
      note,
      subtitle,
      style,
      value
    } = this.props

    const HTMLTag = getPresentationHTMLTag(subtitle, note)

    return (
      <HTMLTag
        style={style}
        className={
          classNames({
            'TextTitle--wrapper': true,
            'TextTitle--wrapper-invert': invert,
            'TextTitle--wrapper-note': !!note,
            'TextTitle--wrapper-subtitle': !!subtitle,
          })
        }>
        { value }
      </HTMLTag>
    )
  }
}

export default TextTitle
