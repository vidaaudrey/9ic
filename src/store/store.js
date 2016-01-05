import {
  createStore
}
from 'redux'
import Immutable, {
  fromJS, Map, List
}
from 'immutable'
import {
  getProfileData, cleanDatabase, getProfileDataDispatchCallback
}
from '../helpers/apiFirebase'
import apiMisc from '../helpers/apiMisc'
  // To understand more about immutable js,
  // visit https://facebook.github.io/immutable-js/

// function getInitalStateFromFirebase(firebaseData) {
//   return new Map(firebaseData)
//     // getProfileData('893335047440430', function (data) {
//     //   console.log('firebase data', data)
//     //   store.dispatch({
//     //     type: 'SET_STATE',
//     //     data
//     //   })
//     // })
// }




function getInitalState(recoveryMode = false, willCleanDatabase = true) {
  // if local storage exist and it contains user information, we'll init the store with local storage
  if (willCleanDatabase) {
    cleanDatabase()
  }
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
    isLoggedIn: false,
    avatar: null,
    likes: new List([]),
    dislikes: new List([])
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
        username: action.username,
        isLoggedIn: true,
        likes: new List(),
        dislikes: new List()
      }))
    case 'LOGOUT':
      return state.merge(new Map({
        userId: null,
        username: null,
        avatar: null,
        isLoggedIn: true
      }))
    case 'ADD_AVATAR':
      return state.merge(new Map({
          avatar: action.avatar
        }))
        // call this when you hold a snapshort of the state and want to restore it (e.g. local storage)
    case 'SET_STATE':
      console.log('setup', action.data)
      return new Map(action.data)

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

    case 'DELETE_LIKE':
      return state.merge(new Map({

      }))

    case 'LOGIN1':
      console.log('--------firebase on login', action.data.id)
      return state.merge(new Map({
        userId: action.data.id,
        username: action.data.displayName,
        isLoggedIn: true,
        avatar: action.data.profileImageURL,
        likes: action.likes,
        dislikes: action.dislikes
      }))

      // apiMisc.getAvatarByUserId(action.data.id)
      // return new Map({
      //   userId: action.data.id,
      //   isLoggedIn: true,
      //   username: action.data.displayName,
      //   likes: new List([]),
      //   dislikes: new List([])
      // })
      // const newState = state.merge(new Map({
      //   userId: action.data.id,
      //   isLoggedIn: true,
      //   username: action.data.displayName
      // }))
      // getProfileData(action.data.id, function (data) {
      //   return new Map({
      //     userId: action.data.id,
      //     isLoggedIn: true,
      //     username: action.data.displayName,
      //     likes: List.of(data.likes),
      //     dislikes: List.of(data.dislikes)
      //   })
      // })


      // getProfileDataDispatchCallback(action.data.id)
      // console.log(action.data, action.data)

    case 'SETUP':
      return new Map({
        userId: action.data.id,
        username: action.data.displayName,
        isLoggedIn: true,
        avatar: action.data.profileImageURL,
        likes: action.likes,
        dislikes: action.dislikes
      })
    default:
      return state
  }
}

export
default createStore(mainReducer)
