import Autocomplete from 'COMP/Autocomplete'
import Button from 'COMP/Button'
import ImgRound from 'COMP/ImgRound'
import Input from 'COMP/Input'
import Signature from 'COMP/Signature'
import SlideImg from 'COMP/SlideImg'
import TextArea from 'COMP/TextArea'
import TextTitle from 'COMP/TextTitle'
import Toolbar from 'COMP/Toolbar'
import * as React from 'react'

import IImgSquare from 'COMP/ImgSquare/IImgSquare'

// import addIcon from 'STATIC/img/add_black.svg'
import backIcon from 'STATIC/img/back.svg'

class CreateTattoo extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props)

    this.state = {
      acceptedContract: 'nao',
      age: '',
      cpf: '',
      lastTattoo: '',
      name: '',
      phone: '',
      picture: '',
      signature: '',
      tattooInspirations: [],
      tattooPictures: []
    }

    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleImgSquareClick = this.handleImgSquareClick.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  public handleBackClick() {
    console.log('back clicked')
  }

  public handleSaveClick() {
    console.log('clicked')
  }

  public updateState = (field: string) => (value: any) => {
    this.setState((state: any) => Object.assign({}, state, { [field]: value }))
  }

  public handleImgSquareClick = (imgSquareKey: string) => (imgObject: IImgSquare, index: number, img: any) =>{
    const pictures = this.state[imgSquareKey]
    const tattoo = Object.assign({}, imgObject, { src: img })
    if (index === -1) {
      pictures.unshift(tattoo)
    } else {
      pictures.splice(index, 1, tattoo)
    }
    this.updateState(imgSquareKey)(pictures)
    return
  }

  public render() {
    const {
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
            onClick={this.handleBackClick} />
        </Toolbar>

        <TextTitle
          value="Criar nova tattoo" />

        <div
          style={{ padding: '0 8px' }}>
          <Autocomplete
            value={name}
            label="nome completo"
            placeholder="nome completo do cliente"
            onChange={this.updateState('name')}
            onSelect={this.updateState('name')}/>

          <div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <ImgRound
              src={picture}
              onChange={this.updateState('picture')}/>
          </div>

          <Input
            value={phone}
            label="telefone"
            placeholder="telefone do cliente"
            onChange={this.updateState('phone')}/>

          <Input
            value={age}
            label="idade"
            placeholder="idade do cliente"
            onChange={this.updateState('age')}/>

          <Input
            value={age}
            label="CPF"
            placeholder="cpf do cliente"
            onChange={this.updateState('cpf')}/>

          <Input
            disabled={true}
            label="ultima tatuagem em"
            value={lastTattoo}
            onChange={this.updateState('lastTattoo')}/>

          <TextTitle
            value="Inspiracoes" />

          <SlideImg
            addable={true}
            onClick={this.handleImgSquareClick('tattooInspirations')}
            images={this.state.tattooInspirations} />

          <TextArea
            label="contrato"
            value="contrato"
            disabled={true}
            onChange={this.updateState('name')}/>

          <Signature
            label="assinatura"
            placeholder="toque para assinar"
            value={signature}
            onChange={this.updateState('signature')}/>

          <TextTitle
            value="Tatuagem pronta" />

          <SlideImg
            addable={true}
            onClick={this.handleImgSquareClick('tattooPictures')}
            images={tattooPictures} />

          <Button
            block={true}
            outline={true}
            onClick={this.handleSaveClick}
            value="gravar"
            style={{ marginBottom: 16 }}/>
        </div>
      </div>
    )
  }
}

export default CreateTattoo
