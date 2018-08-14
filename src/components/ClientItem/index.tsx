import * as React from 'react'

import ImgRound from '../ImgRound'
import TextTitle from '../TextTitle'

import IClientItem from './IClientItem'

import './ClientItem.css'

class ClientItem extends React.PureComponent<any, IClientItem> {
  public render () {
    const {
      image,
      lastVisit,
      lastPurchase,
      name,
      phone,
    } = this.props

    return (
      <div
        className="ClientItem--wrapper">
        <ImgRound
          icon={true}
          src={image}/>

        <div
          className="ClientItem--clientInfo">
          <TextTitle
            note={true}
            value={name}/>

          <TextTitle
            note={true}
            value={phone}/>
        </div>

        <div
          className="ClientItem--lastPurchaseInfo">
          <TextTitle
            note={true}
            value={lastVisit}/>

          <TextTitle
            note={true}
            value={lastPurchase}/>
        </div>

        <div
          className="ClientItem--actions">
          actions
        </div>
      </div>
    )
  }
}

export default ClientItem
