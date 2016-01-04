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

function mainReducer(state = {
  userId: null,
  username: 'audrey',
  avatar: null
}, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('actions in store', action, action.userId)
      return new Map({
        userId: action.userId,
        username: action.username
      })
    case 'LOGOUT':
      return new Map({
        userId: null,
        username: null,
        avatar: null
      })
    case 'ADD_AVATAR':
      {
        return new Map({
          userId: state.get('userId'),
          username: state.get('username'),
          avatar: action.avatar
        })
      }
    default:
      return state
  }
}

export default createStore(mainReducer)
