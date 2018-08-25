import Button from 'COMP/Button'
import ClientItem from 'COMP/ClientItem'
import ClientList from 'COMP/ClientList'
import ImgRound from 'COMP/ImgRound'
import ImgSquare from 'COMP/ImgSquare'
import Input from 'COMP/Input'
import MenuButton from 'COMP/MenuButton'
import MenuItem from 'COMP/MenuItem'
import Modal from 'COMP/Modal'
import Signature from 'COMP/Signature'
import SlideImg from 'COMP/SlideImg'
import TextArea from 'COMP/TextArea'
import TextTitle from 'COMP/TextTitle'
import * as React from 'react'

import closeImage from 'STATIC/img/add.svg'
import buttonVisibleImage from 'STATIC/img/visible.svg'

class SampleComponents extends React.PureComponent<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {
      clients: [
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal2', phone: '34 98888-8888' },
      ],
      fileImg: 'https://i.stack.imgur.com/B1qxgl.png',
      inputVal: '',
      menu: [
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 1' },
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 2', disabled: true },
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 3' },
      ],
      modalVisible: false,
      signature: '',
      slides: [
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
      ],
    }

    this.handleInputVal = this.handleInputVal.bind(this)
    this.handleInputFile = this.handleInputFile.bind(this)
    this.handleClickSlide = this.handleClickSlide.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
    this.handleClickTextTitle = this.handleClickTextTitle.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleSignature = this.handleSignature.bind(this)
  }

  public handleModal () {
    const { modalVisible } = this.state
    this.setState((state: any) => Object.assign({}, state, { modalVisible: !modalVisible }))
  }

  public handleInputVal(inputVal: string | number) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
  }

  public handleSignature(signature: string | number) {
    this.setState((state: any) => Object.assign({}, state, { signature }))
  }

  public handleInputFile(base64Image: string) {
    this.setState((state: any) => Object.assign({}, state, { fileImg: base64Image }))
  }

  public handleClickSlide (image: any, index: number) {
    console.log(image)
    console.log(index)
  }

  public handleClickTextTitle (value: any) {
    console.log(value)
  }

  public handleClickButton (callback: () => void) {
    window.setTimeout(() => {
      console.log('oi')
      if (callback) {
        callback()
      }
    }, 1E3)
  }

  public render () {
    return (
      <div>
        <TextTitle
          value="TextTitle's components: "/>

        <TextTitle
          value="TextTitle Title"/>

        <TextTitle
          subtitle={true}
          value="TextTitle Subtitle"/>

        <TextTitle
          note={true}
          onClick={this.handleClickTextTitle}
          value="TextTitle Note"/>

        <hr />

        <TextTitle
          value="Input's components:"/>

        <Input
          label="label"/>

        <Input
          outline={true}
          label="label"/>

        <Input
          placeholder="label"/>

        <Input
          outline={true}
          placeholder="label"/>

        <Input
          label="label"
          placeholder="placeholder"/>

        <Input
          label="label"
          value={this.state.inputVal}
          placeholder="placeholder"/>

        <Input
          disabled={true}
          label="label"
          value={this.state.inputVal}
          placeholder="placeholder"/>

        <Input
          disabled={false}
          label="label"
          value={this.state.inputVal}
          placeholder="type here"
          onChange={this.handleInputVal}/>

        <Input
          disabled={false}
          outline={true}
          label="label"
          value={this.state.inputVal}
          placeholder="type here"
          onChange={this.handleInputVal}/>

        <Input
          clearAble={true}
          outline={true}
          label="label"
          value={this.state.inputVal}
          placeholder="type here"
          onChange={this.handleInputVal}/>

        <Input
          clearAble={true}
          outline={true}
          label="label"
          value={this.state.inputVal}
          placeholder="type here"
          type="password"
          onChange={this.handleInputVal}/>

        <hr />

        <TextTitle
          value="ImgRound's components:" />

        <ImgRound
          onChange={this.handleInputFile}
          src={this.state.fileImg}
          alt="test"/>

        <ImgRound
          onChange={this.handleInputFile}
          disabled={true}
          icon={true}
          src={this.state.fileImg}
          alt="test"/>

        <hr />

        <TextTitle
          value="ImgSquare's components:" />

        <ImgSquare/>

        <ImgSquare
          src={this.state.fileImg}
          text="FULANO DE TAL"/>

        <ImgSquare
          src={this.state.fileImg}
          text="FULANO DE TAL"
          sidetext="08/08/2018"/>

        <ImgSquare
          disabled={true}
          src={this.state.fileImg}
          text="FULANO DE TAL"
          sidetext="08/08/2018"/>

        <hr />

        <TextTitle
          value="SlideImg's components:" />

        <SlideImg
          onClick={this.handleClickSlide}
          images={this.state.slides}/>

        <SlideImg
          title="test title"
          onClick={this.handleClickSlide}
          images={this.state.slides}/>

        <SlideImg
          addable={true}
          title="test title"
          onClick={this.handleClickSlide}
          images={this.state.slides}/>

        <hr />

        <TextTitle
          value="Button's components:" />

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            maxWidth: '100vw',
            overflowX: 'scroll'
          }}>
          <Button
            onClick={this.handleClickButton}
            loader={true}
            value="button" />

          <Button
            onClick={this.handleClickButton}
            loader={true}
            outline={true}
            value="button" />

          <Button
            onClick={this.handleClickButton}
            icon={true}
            value={buttonVisibleImage} />

          <Button
            onClick={this.handleClickButton}
            loader={true}
            icon={true}
            value={buttonVisibleImage} />

          <Button
            onClick={this.handleClickButton}
            loader={true}
            disabled={true}
            value="button" />

          <Button
            onClick={this.handleClickButton}
            loader={true}
            disabled={true}
            icon={true}
            value={buttonVisibleImage} />

          <Button
            onClick={this.handleClickButton}
            loader={true}
            disabled={true}
            block={true}
            icon={true}
            value={buttonVisibleImage} />
        </div>

        <hr />

        <TextTitle
          value="ClientItem's components:" />

        <ClientItem
          {...this.state.clients[0]}/>

        <hr />

        <TextTitle
          value="ClientList's components:" />

        <ClientList
          onClick={this.handleClickSlide}
          items={this.state.clients}/>

        <ClientList
          onClick={this.handleClickSlide}
          items={[]}/>

        <hr />

        <TextTitle
          value="TextaArea's components:" />

        <TextArea
          value={this.state.inputVal}
          label="textarea component"
          placeholder="type here"
          onChange={this.handleInputVal}/>

        <TextArea
          value={this.state.inputVal}
          label="textarea component"
          placeholder="type here"
          disabled={true}
          onChange={this.handleInputVal}/>

        <TextArea
          value={this.state.inputVal}
          label="textarea component"
          placeholder="type here"
          disabled={true}
          outline={true}
          onChange={this.handleInputVal}/>

        <hr />

        <TextTitle
          value="MenuItem's components:" />

        <MenuItem
          icon={buttonVisibleImage}
          value="Ver alguma coisa"
          onClick={this.handleClickButton}/>

        <MenuItem
          disabled={true}
          icon={buttonVisibleImage}
          value="Ver alguma coisa"
          onClick={this.handleClickButton}/>

        <hr />

        <TextTitle
          value="Menu's components:" />

        <MenuButton
          icon={buttonVisibleImage}>
          <div>
            <MenuItem
              icon={buttonVisibleImage}
              value="Ver alguma coisa"
              onClick={this.handleClickButton} />

            <MenuItem
              disabled={true}
              icon={buttonVisibleImage}
              value="Ver alguma coisa"
              onClick={this.handleClickButton} />
          </div>
        </MenuButton>

        <hr />

        <TextTitle
          value="Modal's components:" />

        <Button
          onClick={this.handleModal}
          icon={true}
          value={buttonVisibleImage} />

        {
          this.state.modalVisible &&
            <Modal
              show={this.state.modalVisible}>
              <Button
                className="Modal--wrapper-close"
                style={{
                  transform: 'rotate(45deg)'
                }}
                onClick={this.handleModal}
                icon={true}
                value={closeImage} />

              <SlideImg
                onClick={this.handleClickSlide}
                images={this.state.slides} />

              <Button
                onClick={this.handleModal}
                value="close modal" />

              <Button
                onClick={this.handleModal}
                value="close modal" />
            </Modal>
        }
        <TextTitle
          value="Signature's components:" />

        <Signature
          label="assinatura"
          onChange={this.handleSignature}
          value={this.state.signature}/>
      </div>
    )
  }
}

export default SampleComponents
