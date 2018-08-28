import className from 'classnames'
import * as React from 'react'

import IToolbar from './IToolbar'

import './Toolbar.css'

class Toolbar extends React.PureComponent<IToolbar, any> {
  public constructor (props: IToolbar) {
    super(props)

    this.state = {
      addShadow: false
    }

    this.addEventListener = this.addEventListener.bind(this)
  }

  public addEventListener (event: any) {
    const scrollVal = event.target.documentElement.scrollTop
    if (scrollVal > 10 && !this.state.addShadow) {
      return this.setState((state: any) => Object.assign({}, state, { addShadow: true }))
    }

    if (scrollVal < 10) {
      return this.setState((state: any) => Object.assign({}, state, { addShadow: false }))
    }
  }

  public componentWillMount () {
    document.addEventListener('scroll', this.addEventListener, false)
  }

  public componentWillUnmount () {
    document.removeEventListener('scroll', this.addEventListener, false)
  }

  public render () {
    const {
      children,
      left
    } = this.props

    return (
      <div
        className={className({
          'Toolbar--wrapper': true,
        })}>
        <div
          className={className({
            'Toolbar--content': true,
            'Toolbar--content-addShadow': this.state.addShadow,
            'Toolbar--content-left': left,
          })}>
          {
            children
          }
        </div>
      </div>
    )
  }
}

export default Toolbar
