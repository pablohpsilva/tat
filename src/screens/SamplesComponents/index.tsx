import * as React from 'react'
import ImgRound from '../../components/ImgRound'
import ImgSquare from '../../components/ImgSquare'
import Input from '../../components/Input'
import TextTitle from '../../components/TextTitle'

class SampleComponents extends React.PureComponent<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {
      fileImg: 'https://i.stack.imgur.com/B1qxgl.png',
      inputVal: '',
    }

    this.handleInputVal = this.handleInputVal.bind(this)
    this.handleInputFile = this.handleInputFile.bind(this)
  }

  public handleInputVal({ target: { value: inputVal } }: { target: { value: any } }) {
    this.setState((state: any) => Object.assign({}, state, { inputVal }))
  }

  public handleInputFile(base64Image: string) {
    debugger
    this.setState((state: any) => Object.assign({}, state, { fileImg: base64Image }))
  }

  public render () {
    return (
      <div>
        <TextTitle
          value="TextTitle's components: "/>

        <TextTitle
          value="TextTitle Title"/>

        <TextTitle
          subtitle={true}
          value="TextTitle Subtitle"/>

        <TextTitle
          note={true}
          value="TextTitle Note"/>

        <hr />

        <TextTitle
          value="Input's components:"/>

        <Input
          label="label"/>

        <Input
          label="label"
          placeholder="placeholder"/>

        <Input
          label="label"
          value={this.state.inputVal}
          placeholder="placeholder"/>

        <Input
          disabled={true}
          label="label"
          value={this.state.inputVal}
          placeholder="placeholder"/>

        <Input
          disabled={false}
          label="label"
          value={this.state.inputVal}
          placeholder="type here"
          onChange={this.handleInputVal}/>

        <hr />

        <TextTitle
          value="ImgRound's components:" />

        <ImgRound
          onChange={this.handleInputFile}
          src={this.state.fileImg}
          alt="test"/>

        <ImgRound
          onChange={this.handleInputFile}
          disabled={true}
          icon={true}
          src={this.state.fileImg}
          alt="test"/>

        <hr />

        <TextTitle
          value="ImgSquare's components:" />

        <ImgSquare/>

        <ImgSquare
        src={this.state.fileImg}
          text="FULANO DE TAL"/>

        <ImgSquare
        src={this.state.fileImg}
          text="FULANO DE TAL"
          sidetext="08/08/2018"/>

        <ImgSquare
          disabled={true}
          src={this.state.fileImg}
          text="FULANO DE TAL"
          sidetext="08/08/2018"/>

      </div>
    )
  }
}

export default SampleComponents
