import * as React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../../components/Button'
// import ClientList from '../../components/ClientList'
import ImgRound from '../../components/ImgRound'
import Input from '../../components/Input'
import SlideImg from '../../components/SlideImg'
import TextArea from '../../components/TextArea'
import TextTitle from '../../components/TextTitle'
import Toolbar from '../../components/Toolbar'

import IImgSquare from '../../components/ImgSquare/IImgSquare'

import addIcon from '../../static/img/add_black.svg'
import backIcon from '../../static/img/back.svg'

class CreateTattoo extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props)

    this.state = {
      inputVal: '',
      inspirations: [
        { editable: true, src: addIcon }
      ],
      tattooPictures: [
        {}
      ],
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleImgSquareClick = this.handleImgSquareClick.bind(this)
    this.handleInputVal = this.handleInputVal.bind(this)
  }

  public handleOnClick() {
    console.log('clicked')
  }

  public handleImgSquareClick(imgObject: IImgSquare, index: number, img: any) {
    const { inspirations } = this.state
    const tattoo = Object.assign({}, imgObject, { src: img })
    inspirations.unshift(tattoo)
    this.setState((state: any) => Object.assign({}, state, { inspirations }))
  }

  public handleInputVal(inputVal: string | number) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
  }

  public render() {
    const {
      inputVal
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
            value={inputVal}
            label="cliente"
            placeholder="nome do cliente"
            onChange={this.handleInputVal}/>

          <div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <ImgRound />
          </div>

          <Input
            value={inputVal}
            label="telefone"
            placeholder="telefone do cliente"
            onChange={this.handleInputVal}/>

          <Input
            value={inputVal}
            label="idade"
            onChange={this.handleInputVal}/>

          <Input
            disabled={true}
            label="ultima tatuagem em"
            value={new Date().toDateString()}
            onChange={this.handleInputVal}/>

          <TextTitle
            value="Inspiracoes" />

          <SlideImg
            onClick={this.handleImgSquareClick}
            images={this.state.inspirations} />

          <TextArea
            label="contrato"
            value="contrato"
            onChange={this.handleInputVal}/>

          <TextTitle
            value="Tatuagem pronta" />

          <SlideImg
            onClick={this.handleOnClick}
            images={this.state.tattooPictures} />
        </div>
      </div>
    )
  }
}

export default CreateTattoo
