import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/store'
import storeLogger from './helpers/storeLogger'
import storeLocalSaver from './helpers/storeLocalSaver'

// for debug purpose, add the store listen here to listen login/out events
storeLogger()

// initialize the app state with store data
store.dispatch({
  type: 'SETUP'
})

// save store data to local storage 
storeLocalSaver()


ReactDOM.render(<App />, document.getElementById('app'))
