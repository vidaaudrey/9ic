import store from '../store/store'
import {
  saveMovieData
}
from './apiFirebase'

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
    if (typeof (Storage) === undefined) {
      console.log('Sorry, your browser doesnot support local storage support. And our server version is still under development.')
    } else {
      localStorage.setItem('mindr', stringifyDeep(store.getState()))
      console.log('Saved app state to local storage')
      saveMovieData(store.getState().toJS())
      console.log('Saved app state to firebase')
    }
  })
}
