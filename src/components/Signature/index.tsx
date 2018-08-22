import className from 'classnames'
import * as React from 'react'
import SignaturePad from 'signature_pad'

import Button from '../Button';
import Modal from '../Modal';
import ISignature from './ISignature'

import './Signature.css'

import closeImage from '../../static/img/add.svg'

class Signature extends React.Component<ISignature, any> {
  private signaturePad: any
  private signatureId: string

  constructor (props: ISignature) {
    super(props)

    this.state = {
      showModal: false
    }
    this.signatureId = `Signature-${Math.random().toString(36).slice(4)}`

    this.clearSigaturePad = this.clearSigaturePad.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.getSignaturePadImage = this.getSignaturePadImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loadSignaturePad = this.loadSignaturePad.bind(this)
    this.openModal = this.openModal.bind(this)
    this.setSignaturePad = this.setSignaturePad.bind(this)
  }

  public clearSigaturePad () {
    this.signaturePad.clear()
  }

  public closeModal () {
    this.setState((state: any) => Object.assign({}, state, { showModal: false }))
  }

  public openModal () {
    this.setState((state: any) => Object.assign({}, state, { showModal: true }))
    this.loadSignaturePad()
  }

  public getSignaturePadImage (): string {
    const image = this.signaturePad.toDataURL('image/png')
    return image
  }

  public setSignaturePad (canvasElement: HTMLCanvasElement) {
    if (canvasElement) {
      this.signaturePad = new SignaturePad(canvasElement)
    }
  }

  public loadSignaturePad () {
    window.setTimeout(() => {
      this.setSignaturePad(document.querySelector(`#${this.signatureId}`) as HTMLCanvasElement)
    }, 10)
  }

  public handleChange () {
    const { onChange } = this.props
    if (onChange) {
      onChange(this.getSignaturePadImage())
    }
    this.closeModal()
  }

  public render () {
    const {
      label,
      outline,
      placeholder,
      value
    } = this.props

    const {
      showModal
    } = this.state

    return (
      <div
        className={className({
          'Signature--wrapper': true,
          'Signature--wrapper-outline': outline,
        })}>
        <div
          className="Signature--content"
          onClick={this.openModal}>
          {
            label &&
              <label
                className="Signature--label">
                { label }
              </label>
          }

          <div
            className="Signature--signatureWrapper">
            {
              value
                ? <img
                    src={value}
                    alt="written signature" />
                : <span
                    className="Signature--empty">
                    { placeholder }
                  </span>
            }
          </div>
        </div>

        {
          showModal &&
            <Modal
              show={showModal}>
              <Button
                className="Modal--wrapper-close"
                style={{
                  transform: 'rotate(45deg)'
                }}
                onClick={this.closeModal}
                icon={true}
                value={closeImage} />
              <div
                className="Signature--modalContent">
                <canvas
                  id={this.signatureId}
                  className="Signature--modalCanva"
                  width="400"
                  height="200" />
              </div>
              <div
                className="Signature--modalControl">
                <Button
                  onClick={this.closeModal}
                  value="cancelar"/>

                <Button
                  id="clear"
                  onClick={this.clearSigaturePad}
                  value="limpar"/>

                <Button
                  id="save"
                  onClick={this.handleChange}
                  value="gravar"/>
              </div>
            </Modal>
        }
      </div>
    )
  }
}

export default Signature
