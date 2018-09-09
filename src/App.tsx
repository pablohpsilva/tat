import * as React from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
// import { Dispatch } from 'redux';
// import { Action } from 'redux-actions';
import './App.css';
// import './config/firebase.config'

import Client from './screens/Client'
import Clients from './screens/Clients'
import Contracts from './screens/Contracts'
import CreateTattoo from './screens/CreateTattoo'
import History from './screens/History'
import Home from './screens/Home'
import Login from './screens/Login'
import SComp from './screens/SamplesComponents'

// import { addTodo } from './store/todo/actions'
// import { ITodo } from './store/todo/model'

// interface IAppProps {
//   todos: ITodo[];
//   dispatch: Dispatch<Action<any>>;
// }

class App extends React.Component {
// class App extends React.Component<IAppProps> {
  // constructor (props: IAppProps) {
  //   super(props)

  //   this.createTodo = this.createTodo.bind(this)
  // }

  // public createTodo () {
  //   const { dispatch } = this.props
  //   if (dispatch) {
  //     dispatch(addTodo('added', Math.random()*1000))
  //   }
  // }

  public render() {
    return (
      <div
        className="App">
        <Switch>
          <Route
            path="/login"
            component={Login} />
          <Route
            path="/contracts"
            component={Contracts} />
          <Route
            path="/clients/:id"
            component={Client} />
          <Route
            path="/clients"
            component={Clients} />
          <Route
            path="/history"
            component={History} />
          <Route
            path="/create-tattoo"
            component={CreateTattoo} />
          <Route
            path="/extra"
            component={SComp} />
          <Route
            path="/"
            component={Home}/>
        </Switch>

        {/* {
          JSON.stringify(this.props.todos, null, 2)
        }

        <br/>
        <br/>
        <br/>

        {
          this.props.todos.map((todo: ITodo) => JSON.stringify(todo, null, 2))
        }

        <button
          onClick={this.createTodo}>cria</button> */}
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => ({
//   todos: state.todos
// })

// export default connect(mapStateToProps)(App)
export default App
