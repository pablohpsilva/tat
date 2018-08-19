import * as React from 'react'

import ClientItem from '../ClientItem'
import TextTitle from '../TextTitle'

import IClientItem from '../ClientItem/IClientItem'
import IClientList from './IClientList'

import './ClientList.css'

class ClientList extends React.PureComponent<IClientList, any> {
  public static defaultProps = {
    items: [],
    note: false,
    subtitle: false,
    title: ''
  }

  public handleClientItemClick = (item: IClientItem, index: number) => () => {
    const { onClick } = this.props
    if (onClick) {
      onClick(item, index)
    }
  }

  public render() {
    const {
      items,
      title,
      note,
      subtitle,
    } = this.props

    return (
      <div
        className="ClientList--wrapper">
        {
          title &&
          <TextTitle
            value={title}
            note={note}
            subtitle={subtitle} />
        }
        {
          items.map((item: IClientItem, index: number) => (
            <ClientItem
              key={`ClientItem-${index}`}
              onClick={this.handleClientItemClick(item, index)}
              {...item} />
          ))
        }
      </div>
    )
  }
}

export default ClientList
