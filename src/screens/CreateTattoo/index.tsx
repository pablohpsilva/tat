import * as React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../../components/Button'
// import ClientList from '../../components/ClientList'
import ImgRound from '../../components/ImgRound'
import Input from '../../components/Input'
import Signature from '../../components/Signature'
import SlideImg from '../../components/SlideImg'
import TextArea from '../../components/TextArea'
import TextTitle from '../../components/TextTitle'
import Toolbar from '../../components/Toolbar'

import IImgSquare from '../../components/ImgSquare/IImgSquare'

// import addIcon from '../../static/img/add_black.svg'
import backIcon from '../../static/img/back.svg'

class CreateTattoo extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props)

    this.state = {
      acceptedContract: 'nao',
      age: '',
      lastTattoo: new Date().toDateString(),
      name: '',
      phone: '',
      picture: '',
      signature: '',
      tattooPictures: [
        { editable: true }
      ]
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    // this.handleImgSquareInspirationClick = this.handleImgSquareInspirationClick.bind(this)
    this.handleImgSquareTattooClick = this.handleImgSquareTattooClick.bind(this)
    // this.handleInputVal = this.handleInputVal.bind(this)
    this.handleSignatureChange = this.handleSignatureChange.bind(this)
    this.updateState = this.updateState.bind(this)
    this.handleProfilePictureChange = this.handleProfilePictureChange.bind(this)
  }

  public handleOnClick() {
    console.log('clicked')
  }

  public updateState = (field: string) => (value: string | number) => {
    this.setState((state: any) => Object.assign({}, state, { [field]: value }))
  }

  public handleProfilePictureChange(picture: string) {
    this.setState((state: any) => Object.assign({}, state, { picture }))
  }

  // public handleImgSquareInspirationClick(imgObject: IImgSquare, index: number, img: any) {
  //   const { inspirations } = this.state
  //   const tattoo = Object.assign({}, imgObject, { src: img })
  //   inspirations.unshift(tattoo)
  //   this.setState((state: any) => Object.assign({}, state, { inspirations }))
  // }

  public handleImgSquareTattooClick(imgObject: IImgSquare, index: number, img: any) {
    const { tattooPictures } = this.state
    const tattoo = Object.assign({}, imgObject, { src: img })
    tattooPictures.unshift(tattoo)
    this.setState((state: any) => Object.assign({}, state, { tattooPictures }))
    return
  }

  // public handleInputVal(inputVal: string | number) {
  //   this.setState((state: any) => Object.assign({}, state, { inputVal }))
  // }

  public handleSignatureChange(signature: string | number) {
    this.setState((state: any) => Object.assign({}, state, { signature }))
  }

  public render() {
    const {
      // acceptedContract,
      age,
      lastTattoo,
      name,
      phone,
      picture,
      signature,
      tattooPictures
    } = this.state

    return (
      <div
        className="CreateTattoo--wrapper">
        <Toolbar
          left={true}>
          <Button
            icon={true}
            noBounds={true}
            value={backIcon}
            to="/"
            onClick={this.handleOnClick} />
        </Toolbar>

        <TextTitle
          value="Criar nova tattoo" />

        <div
          style={{ padding: '0 8px' }}>
          <Input
            value={name}
            label="cliente"
            placeholder="nome do cliente"
            onChange={this.updateState('name')}/>

          <div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <ImgRound
              src={picture}
              onChange={this.handleProfilePictureChange}/>
          </div>

          <Input
            value={phone}
            label="telefone"
            placeholder="telefone do cliente"
            onChange={this.updateState('phone')}/>

          <Input
            value={age}
            label="idade"
            onChange={this.updateState('age')}/>

          <Input
            disabled={true}
            label="ultima tatuagem em"
            value={lastTattoo}
            onChange={this.updateState('lastTattoo')}/>

          <TextTitle
            value="Inspiracoes" />

          {/* <SlideImg
            onClick={this.handleImgSquareInspirationClick}
            images={this.state.inspirations} /> */}

          <TextArea
            label="contrato"
            value="contrato"
            disabled={true}
            onChange={this.updateState('name')}/>

          <Signature
            label="assinatura"
            placeholder="toque para assinar"
            value={signature}
            onChange={this.handleSignatureChange}/>

          <TextTitle
            value="Tatuagem pronta" />

          <SlideImg
            onClick={this.handleImgSquareTattooClick}
            images={tattooPictures} />

          <Button
            block={true}
            outline={true}
            onClick={this.handleOnClick}
            value="gravar"
            style={{ marginBottom: 16 }}/>
        </div>
      </div>
    )
  }
}

export default CreateTattoo
