import * as React from 'react'

import Button from '../Button'
import ImgRound from '../ImgRound'
import TextTitle from '../TextTitle'

import IClientItem from './IClientItem'

import './ClientItem.css'

import buttonVisibleImage from '../../static/img/visible.svg'

class ClientItem extends React.PureComponent<IClientItem, any> {
  public render () {
    const {
      image,
      lastVisit,
      lastPurchase,
      name,
      onClick,
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
          <Button
            onClick={onClick}
            loader={true}
            icon={true}
            value={buttonVisibleImage} />
        </div>
      </div>
    )
  }
}

export default ClientItem
