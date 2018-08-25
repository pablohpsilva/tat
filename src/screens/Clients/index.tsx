import Button from 'COMP/Button'
import ClientList from 'COMP/ClientList'
import Input from 'COMP/Input'
import TextTitle from 'COMP/TextTitle'
import Toolbar from 'COMP/Toolbar'
import * as Fuse from 'fuse.js'
import * as React from 'react'

import backIcon from 'STATIC/img/back.svg'

const clients: object[] = []
for(let i = 0; i < 40; i += 1) {
  clients.push({ image: 'https://i.stack.imgur.com/B1qxgl.png', lastPurchase: `R$ ${(800 + (Math.random() * 10 + i)).toString().slice(0, 3)},00`, lastVisit: `${i+1}/08/2018`, name: `${i} fulano de tal`, phone: '34 99999-9999' })
}

const fuseOptions = {
  distance: 100,
  keys: [
    'lastPurchase',
    'lastVisit',
    'name',
    'phone'
  ],
  location: 0,
  maxPatternLength: 34,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.3
};

class Clients extends React.Component<{}, any> {
  private fuse: any

  constructor(props: {}) {
    super(props)

    this.state = {
      clientList: [],
      clients,
      inputVal: ''
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleInputVal = this.handleInputVal.bind(this)
    this.search = this.search.bind(this)
    this.loadFuzyList = this.loadFuzyList.bind(this)
  }

  public handleOnClick() {
    console.log('clicked')
  }

  public handleInputVal(inputVal: string | number) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
    this.search(inputVal)
  }

  public search (input: string | number) {
    this.setState((state: any) => Object.assign({}, state, { clientList: input ? this.fuse.search(input) : state.clients }))
  }

  public loadFuzyList (list: any) {
    this.fuse = new Fuse(list, fuseOptions)
    this.search('')
  }

  public componentDidMount () {
    this.loadFuzyList(this.state.clients)
  }

  public render() {
    const {
      inputVal
    } = this.state

    return (
      <div
        className="Clients--wrapper">
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
          value="Clientes" />

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

        <div
          style={{ padding: '0px 8px' }}>
          <ClientList
            onClick={this.handleOnClick}
            items={this.state.clientList} />
        </div>
      </div>
    )
  }
}

export default Clients
