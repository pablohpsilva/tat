import * as React from 'react'

class Client extends React.Component<{}, any> {
  public static defaultProps = {}

  constructor (props: {}) {
    super(props)
  }

  public render () {
    return (
      <div
        className="Client--wrapper">
        Client was created!
      </div>
    )
  }
}

export default Client
