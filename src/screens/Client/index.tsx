import Button from 'COMP/Button'
import ImgRound from 'COMP/ImgRound'
import Input from 'COMP/Input'
import SlideImg from 'COMP/SlideImg'
import TextTitle from 'COMP/TextTitle'
import Toolbar from 'COMP/Toolbar'
import * as React from 'react'

import backIcon from 'STATIC/img/back.svg'


import './Client.css'

const services = [
  [
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ],
  [
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
    { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
  ]
]

class Client extends React.Component<{}, any> {
  public static defaultProps = {}

  public state = {
    age: '',
    lastTattoo: '',
    phone: ''
  }

  constructor (props: {}) {
    super(props)

    this.onClickSlideImg = this.onClickSlideImg.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  public onClickSlideImg () {
    console.log('click')
  }

  // public updateState = (key: string) => (value: any) => {
  public updateState (key: string) {
    return (value: any) => {
      this.setState((state: any) => Object.assign({}, state, { [key]: value }))
    }
  }

  public render () {
    const {
      age,
      lastTattoo,
      phone
    } = this.state
    return (
      <div
        className="Client--wrapper">
        <Toolbar
          left={true}>
          <Button
            icon={true}
            noBounds={true}
            value={backIcon}
            to="/"/>
        </Toolbar>

        <TextTitle
          value="Fulano de tal"/>

        <div
          className="Client--avatar">
          <ImgRound
            src="https://i.stack.imgur.com/B1qxgl.png" />
        </div>

        <Input
          label="whatsapp"
          onChange={this.updateState('phone')}
          value={phone}/>

        <Input
          label="idade"
          onChange={this.updateState('age')}
          value={age}/>

        <Input
          label="ultima tatuagem em"
          onChange={this.updateState('lastTattoo')}
          value={lastTattoo}/>

        <TextTitle
          value="Servicos" />

        {
          services.map((service: any, index: number) => (
            <SlideImg
              key={`Client-SlideImg-${index}`}
              onClick={this.onClickSlideImg}
              images={service}/>
          ))
        }

        <div
          className="Client--saveButtonWrapper">
          <Button
            className="Client-saveButton"
            block={true}
            outline={true}
            onClick={this.onClickSlideImg}
            value="gravar" />
        </div>

      </div>
    )
  }
}

export default Client
