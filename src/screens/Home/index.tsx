import Chart from 'COMP/Chart'
import ClientList from 'COMP/ClientList'
import MenuButton from 'COMP/MenuButton'
import MenuItem from 'COMP/MenuItem'
import SlideImg from 'COMP/SlideImg'
import TextTitle from 'COMP/TextTitle'
import Timeline from 'COMP/Timeline'
import Toolbar from 'COMP/Toolbar'
import * as React from 'react'

import addIcon from 'STATIC/img/add_black.svg'
import contractIcon from 'STATIC/img/contract.svg'
import homeIcon from 'STATIC/img/home.svg'
import likeIcon from 'STATIC/img/like.svg'
import moreIcon from 'STATIC/img/more.svg'
import usersIcon from 'STATIC/img/users.svg'

import './Home.css'

const menu = [
  { icon: homeIcon, value: 'home', to: '/' },
  { icon: addIcon, value: 'criar nova tattoo', to: '/create-tattoo' },
  { icon: usersIcon, value: 'clientes', to: '/clients' },
  { icon: contractIcon, value: 'contratos', to: 'contracts' },
  { icon: likeIcon, value: 'historico', to: 'history' },
]
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

    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  public handleOnClick () {
    console.log('clicked')
  }

  public handleMenuClick () {
    const menuBackdrop: HTMLElement = document.querySelector('.Menu--backdrop') as HTMLElement
    if (menuBackdrop) {
      menuBackdrop.click()
    }
  }

  public render () {
    return (
      <div
        className="Home--wrapper">
        <Toolbar>
          <MenuButton
            icon={moreIcon}
            noBounds={true}
            offsetX="calc(100vw - 228px)"
            offsetY="24px">
            <div>
              {
                menu.map((item: any, index: number) => (
                  <MenuItem
                    key={`MenuItem-${index}`}
                    onClick={this.handleMenuClick}
                    {...item} />
                ))
              }
            </div>
          </MenuButton>
        </Toolbar>

        <Timeline/>

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
