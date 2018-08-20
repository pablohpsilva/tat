// https://reactjs.org/docs/portals.html
// https://codepen.io/gaearon/pen/yzMaBd
// https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
// https://reactjs.org/docs/accessibility.html#programmatically-managing-focus
import className from 'classnames'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import IModal from './IModal'

import './Modal.css'

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component<IModal, any> {
  public static defaultProps = {
    backdrop: true,
    show: false,
  }

  private el: HTMLElement

  constructor(props: IModal) {
    super(props)
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div')
  }

  public componentDidMount () {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    if (modalRoot) {
      modalRoot.appendChild(this.el)
    }
  }

  public componentWillUnmount () {
    // Remove the element from the DOM when we unmount
    if (modalRoot) {
      modalRoot.removeChild(this.el)
    }
  }

  public render () {
    const {
      backdrop,
      show,
    } = this.props

    this.el.setAttribute('class', className({
      'Modal--wrapper': true,
      'Modal--wrapper-noBackdrop': !backdrop,
      'Modal--wrapper-visible': show,
    }))

    // Use a portal to render the children into the element
    return show && ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    )
  }
}

export default Modal
