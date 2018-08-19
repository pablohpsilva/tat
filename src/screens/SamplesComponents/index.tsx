import * as React from 'react'
import Button from '../../components/Button'
import ClientItem from '../../components/ClientItem'
import ImgRound from '../../components/ImgRound'
import ImgSquare from '../../components/ImgSquare'
import Input from '../../components/Input'
import SlideImg from '../../components/SlideImg'
import TextArea from '../../components/TextArea'
import TextTitle from '../../components/TextTitle'

import buttonVisibleImage from '../../static/img/visible.svg'

class SampleComponents extends React.PureComponent<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {
      clients: [
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' }
      ],
      fileImg: 'https://i.stack.imgur.com/B1qxgl.png',
      inputVal: '',
      slides: [
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
      ]
    }

    this.handleInputVal = this.handleInputVal.bind(this)
    this.handleInputFile = this.handleInputFile.bind(this)
    this.handleClickSlide = this.handleClickSlide.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  public handleInputVal({ target: { value: inputVal } }: { target: { value: any } }) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
  }

  public handleInputFile(base64Image: string) {
    this.setState((state: any) => Object.assign({}, state, { fileImg: base64Image }))
  }

  public handleClickSlide (image: any, index: number) {
    console.log(image)
    console.log(index)
  }

  public handleClickButton (callback: () => void) {
    window.setTimeout(() => {
      console.log('oi')
      callback()
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
          value="TextTitle Note"/>

        <hr />

        <TextTitle
          value="Input's components:"/>

        <Input
          label="label"/>

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
          value="ClientList's components:" />

        <ClientItem
          {...this.state.clients[0]}/>

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

      </div>
    )
  }
}

export default SampleComponents
