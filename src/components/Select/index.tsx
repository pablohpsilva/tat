import * as React from 'react'

import ISelect from './ISelect'

class Select extends React.Component<ISelect, {}> {
  public static defaultProps = {}

  constructor (props: ISelect) {
    super(props)
  }

  public render () {
    return (
      <div
        className="Select">
        Select was created!
      </div>
    )
  }
}

export default Select
