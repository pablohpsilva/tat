import className from 'classnames'
import * as React from 'react'
import * as ReactAutocomplete from 'react-autocomplete'

import IAutocomplete from './IAutocomplete'

import closeImage from 'STATIC/img/add.svg'

import './Autocomplete.css'

const states = [
  { abbr: 'AL', name: 'Alabama' },
  { abbr: 'AK', name: 'Alaska' },
  { abbr: 'AZ', name: 'Arizona' },
  { abbr: 'AR', name: 'Arkansas' },
  { abbr: 'CA', name: 'California' },
  { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' },
  { abbr: 'DE', name: 'Delaware' },
  { abbr: 'FL', name: 'Florida' },
  { abbr: 'GA', name: 'Georgia' },
  { abbr: 'HI', name: 'Hawaii' },
  { abbr: 'ID', name: 'Idaho' },
  { abbr: 'IL', name: 'Illinois' },
  { abbr: 'IN', name: 'Indiana' },
  { abbr: 'IA', name: 'Iowa' },
  { abbr: 'KS', name: 'Kansas' },
  { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'ME', name: 'Maine' },
  { abbr: 'MD', name: 'Maryland' },
  { abbr: 'MA', name: 'Massachusetts' },
  { abbr: 'MI', name: 'Michigan' },
  { abbr: 'MN', name: 'Minnesota' },
  { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'MO', name: 'Missouri' },
  { abbr: 'MT', name: 'Montana' },
  { abbr: 'NE', name: 'Nebraska' },
  { abbr: 'NV', name: 'Nevada' },
  { abbr: 'NH', name: 'New Hampshire' },
  { abbr: 'NJ', name: 'New Jersey' },
  { abbr: 'NM', name: 'New Mexico' },
  { abbr: 'NY', name: 'New York' },
  { abbr: 'NC', name: 'North Carolina' },
  { abbr: 'ND', name: 'North Dakota' },
  { abbr: 'OH', name: 'Ohio' },
  { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'OR', name: 'Oregon' },
  { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'RI', name: 'Rhode Island' },
  { abbr: 'SC', name: 'South Carolina' },
  { abbr: 'SD', name: 'South Dakota' },
  { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'UT', name: 'Utah' },
  { abbr: 'VT', name: 'Vermont' },
  { abbr: 'VA', name: 'Virginia' },
  { abbr: 'WA', name: 'Washington' },
  { abbr: 'WV', name: 'West Virginia' },
  { abbr: 'WI', name: 'Wisconsin' },
  { abbr: 'WY', name: 'Wyoming' }
]
class Autocomplete extends React.Component<IAutocomplete, {}> {
  public static defaultProps = {}

  constructor (props: IAutocomplete) {
    super(props)

    this.getItemValue = this.getItemValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.shouldItemRender = this.shouldItemRender.bind(this)
  }

  public getItemValue (item: any) {
    return item.name
  }

  public handleChange (event: any, value: any) {
    const { onChange } = this.props
    if (onChange) {
      onChange(value)
    }
  }

  public handleSelect (value: any) {
    const { onSelect } = this.props
    if (onSelect) {
      onSelect(value)
    }
  }

  public renderMenu (children: any) {
    return (
      <div className="menu">
        { children }
      </div>
    )
  }

  public renderItem (item: any, isHighlighted: boolean) {
    return (
      <div
        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
        key={item.abbr}
      >{item.name}</div>
    )
  }

  public handleClick() {
    this.handleChange(null, '')
  }

  public shouldItemRender (item: any, value: string) {
    return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  }

  public render () {
    const {
      clearAble,
      label,
      outline,
      style,
      value
    } = this.props
    return (
      <div
        className={className({
          'Autocomplete--wrapper': true,
          'Autocomplete--wrapper-outline': outline,
        })}
        style={style}>
        {
          label &&
            <label
              className="Autocomplete--label">
              { label }
            </label>
        }
        <ReactAutocomplete
          value={value}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={states}
          getItemValue={this.getItemValue}
          shouldItemRender={this.shouldItemRender}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          selectOnBlur={true}
          autoHighlight={true}
          renderMenu={this.renderMenu}
          renderItem={this.renderItem}/>
        {
          clearAble &&
            <img
              onClick={this.handleClick}
              className="Autocomplete--clearAble"
              src={closeImage}
              alt="clear input" />
        }
      </div>
    )
  }
}

export default Autocomplete
