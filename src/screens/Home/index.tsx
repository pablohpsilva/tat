import * as React from 'react'
import Button from '../../components/Button'
import Chart from '../../components/Chart'
import ClientList from '../../components/ClientList'
import SlideImg from '../../components/SlideImg'
import TextTitle from '../../components/TextTitle'
import Toolbar from '../../components/Toolbar'

import moreIcon from '../../static/img/more.svg'

import './Home.css'
class Home extends React.Component<{}, any> {
  constructor (props: {}) {
    super(props)

    this.state = {
      clients: [
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal', phone: '34 99999-9999' },
        { image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: 'R$ 800,00', lastVisit: '08/08/2018', name: 'fulano de tal2', phone: '34 98888-8888' },
      ],
      menu: [
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 1' },
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 2', disabled: true },
        { icon: 'https://i.stack.imgur.com/B1qxgl.png', value: 'text 3' },
      ],
      slides: [
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' },
        { src: 'https://i.stack.imgur.com/B1qxgl.png', text: 'fulano de tal', sidetext: '08/08/2018' }
      ]
    }
  }

  public handleOnClick () {
    console.log('clicked')
  }

  public render () {
    return (
      <div
        className="Home--wrapper">
        <Toolbar>
          <Button
            icon={true}
            noBounds={true}
            onClick={this.handleOnClick}
            value={moreIcon} />
        </Toolbar>
        {/* <div
          className="Home--toolbar">
          <Button
            icon={true}
            noBounds={true}
            onClick={this.handleOnClick}
            value={moreIcon}/>
        </div> */}
        <TextTitle
          value="Resumo/mês"/>
        <TextTitle
          subtitle={true}
          value="Total: R$3,400"/>

        <Chart/>

        <TextTitle
          value="Histórico" />

        <SlideImg
          onClick={this.handleOnClick}
          images={this.state.slides}/>

        <TextTitle
          value="Clientes rescentes"/>

        <div
          style={{ padding: '0px 8px' }}>
          <ClientList
            onClick={this.handleOnClick}
            items={this.state.clients} />
        </div>
      </div>
    )
  }
}

export default Home
