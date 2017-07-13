import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)//传入reducer生成store;
console.log('aaa',todoApp);

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>{/*将store绑定在最外层组件，以便所有子组件都能通过this.props来访问*/}
    <App />
  </Provider>,
  rootElement
)