import store from '../store/store'
import {
  saveMovieData
}
from '../helpers/apiFirebase'

function stringifyDeep(obj) {
  for (var [key, value] of obj) {
    if (Array.isArray(value)) {
      obj[key] = JSON.stringify(value)
    }
  }
  return JSON.stringify(obj)
}

// save the state tree to the local storage
export default () => {
  store.subscribe(() => {
    const obj = store.getState().toJS()
    console.log('**** new state detected, obj:', obj, 'username: ', obj.username, 'id', obj.userId)
      // console.log('**** new store state detected', store.getState().get('username'), 'userId:', store.getState().get('userId'))
      // try to save the store.getState() object  to firebase here
    if (obj.username) {
      saveMovieData(obj)
    }

    if (typeof (Storage) === undefined) {
      console.log('Sorry, your browser doesnot support local storage support. And our server version is still under development.')
    } else {
      localStorage.setItem('mindr', stringifyDeep(store.getState()))
      console.log('Saved app state to local storage')
    }
  })
}
