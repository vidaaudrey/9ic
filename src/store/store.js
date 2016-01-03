import {
  createStore
}
from 'redux'
import {
  Map
}
from 'immutable'

// To understand more about immutable js,
// visit https://facebook.github.io/immutable-js/

function mainReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('actions in store', action, action.userId)
      return new Map({
        userId: action.userId
      })
    case 'LOGOUT':
      return new Map({
        userId: null
      })

    default:
      return state
  }
}

export default createStore(mainReducer)
