import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
// import { createStore, Store } from 'redux'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
// import appFlux from './store'

// const initialState = {}

// const store: Store<any> = createStore(appFlux, initialState)

ReactDOM.render(
  <HashRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </HashRouter>,
  document.getElementById('app-root') as HTMLElement
)
registerServiceWorker()
