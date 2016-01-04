import {
  createStore
}
from 'redux'
import Immutable, {
  fromJS, Map, List
}
from 'immutable'

// To understand more about immutable js,
// visit https://facebook.github.io/immutable-js/

function getInitalState(recoveryMode = false) {
  // if local storage exist and it contains user information, we'll init the store with local storage
  if (recoveryMode) {
    if (typeof (Storage) !== undefined && localStorage.getItem('mindr') !== undefined) {
      const lstoreStr = localStorage.getItem('mindr')
      const lstoreObj = JSON.parse(lstoreStr)
      console.log('getting initial store state from local storage', lstoreObj)
      if (lstoreObj.userId !== undefined) {
        return new Map(...lstoreObj, {
          likes: new List(lstoreObj.likes),
          dislikes: new List(lstoreObj.dislikes)
        })
      }
    }
  }
  return new Map({
    userId: null,
    username: null,
    avatar: null,
    likes: new List(),
    dislikes: new List()
  })

  // return new Map({
  //   userId: 893335047440430,
  //   username: 'audrey',
  //   avatar: 'https://scontent.xx.fbcdn.net/hprofile-prn2/v/t1.0…g?oh=6883efb78870d0276dc4a7fddf831cfa&oe=5704F4AF',
  //   likes: new List(),
  //   dislikes: new List()
  // })
}

function mainReducer(state = getInitalState(), action) {
  console.log('----dispatching action', action.type)
  switch (action.type) {
    case 'LOGIN':
      return state.merge(new Map({
        userId: action.userId,
        username: action.username
      }))
    case 'LOGOUT':
      return state.merge(new Map({
        userId: null,
        username: null,
        avatar: null
      }))
    case 'ADD_AVATAR':
      return state.merge(new Map({
          userId: state.get('userId'),
          username: state.get('username'),
          avatar: action.avatar
        }))
        // call this when you hold a snapshort of the state and want to restore it (e.g. local storage)
    case 'SET_STATE':
      const appData = new Map(action.data)
        // console.log('setting state from firebase data', appData, appData.get('username'))
      return appData

    case 'LIKE':
      return state.merge(new Map({
        likes: [...state.get('likes'), {
          id: action.id,
          title: action.title,
          poster: action.poster
        }]
      }))
    case 'DISLIKE':
      return state.merge(new Map({
        dislikes: [...state.get('dislikes'), {
          id: action.id,
          title: action.title,
          poster: action.poster
        }]
      }))

    case 'SETUP':
      return state
    default:
      return state
  }
}

export
default createStore(mainReducer)
