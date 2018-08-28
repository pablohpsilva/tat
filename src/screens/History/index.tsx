import Button from 'COMP/Button'
import Input from 'COMP/Input'
import Modal from 'COMP/Modal'
import SlideImg from 'COMP/SlideImg'
import TextTitle from 'COMP/TextTitle'
import Toolbar from 'COMP/Toolbar'
import * as Fuse from 'fuse.js'
import * as React from 'react'

import IImgSquare from 'COMP/ImgSquare/IImgSquare'

import closeImage from 'STATIC/img/add.svg'
import backIcon from 'STATIC/img/back.svg'

const fuseOptions = {
  distance: 100,
  keys: [
    'text',
    'sidetext'
  ],
  location: 0,
  maxPatternLength: 34,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.3
}

const slides = [
  [
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
  [
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
  [
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
  [
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
  [
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { disabled: true, src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
]

class History extends React.Component<{}, any> {
  private fuse: any

  constructor (props: {}) {
    super(props)

    this.state = {
      histories: slides,
      historyList: [],
      inputVal: '',
      modalVisible: false
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleInputVal = this.handleInputVal.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.search = this.search.bind(this)
    this.loadFuzyList = this.loadFuzyList.bind(this)
  }

  public handleOnClick () {
    console.log('clicked')
    this.handleModal()
  }

  public handleModal () {
    const { modalVisible } = this.state
    this.setState((state: any) => Object.assign({}, state, { modalVisible: !modalVisible }))
  }

  public search(input: string | number) {
    // const { historyList } = this.props
    // const historyList = this.state.historyList.map((histiries: any) => this.fuse.search(input))
    this.setState((state: any) => Object.assign({}, state, { historyList: input ? this.fuse.search(input) : state.histories }))
  }

  public handleInputVal(inputVal: string | number) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
    this.search(inputVal)
  }

  public loadFuzyList(list: any) {
    this.fuse = new Fuse(list, fuseOptions)
    this.search('')
  }

  public componentDidMount() {
    this.loadFuzyList(this.state.histories)
  }

  public render () {
    const {
      inputVal
    } = this.state

    return (
      <div
        className="History--wrapper">
        <Toolbar
          left={true}>
          <Button
            icon={true}
            noBounds={true}
            value={backIcon}
            to="/"
            onClick={this.handleOnClick}/>
        </Toolbar>

        <TextTitle
          value="Historico" />

        <div
          style={{
            padding: '0 8px'
          }}>
          <Input
            outline={true}
            clearAble={true}
            onChange={this.handleInputVal}
            value={inputVal}
            placeholder="buscar por nome, mes, valor, inspiracao..." />
        </div>

        {
          slides.map((slide: IImgSquare[], index: number) => (
            <SlideImg
              key={`History-SlideImg-${index}`}
              onClick={this.handleOnClick}
              images={slide} />
          ))
        }

        {
          this.state.modalVisible &&
            <Modal
              show={this.state.modalVisible}>
              <Button
                className="Modal--wrapper-close"
                style={{
                  transform: 'rotate(45deg)'
                }}
                noBounds={true}
                onClick={this.handleModal}
                icon={true}
                value={closeImage} />

              <SlideImg
                onClick={this.handleModal}
                images={this.state.slides} />

              <Button
                onClick={this.handleModal}
                value="ver cliente" />

              <Button
                onClick={this.handleModal}
                value="ver servico" />
            </Modal>
        }
      </div>
    )
  }
}

export default History
