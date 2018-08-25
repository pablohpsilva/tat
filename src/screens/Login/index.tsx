import * as React from 'react'

import Input from 'COMP/Input'
import TextTitle from 'COMP/TextTitle'

import './Login.css'
class Login extends React.Component {
  public render () {
    return (
      <div
        className="Login--wrapper">
        <TextTitle
          style={{
            marginBottom: 100
          }}
          value="TAT"/>

        <Input
          clearAble={true}
          outline={true}
          label="user"/>

        <Input
          clearAble={true}
          outline={true}
          label="password"/>
      </div>
    )
  }
}

export default Login
