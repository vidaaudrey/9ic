import store from '../store/store'
var Firebase = require('firebase')
export const firebaseRef = new Firebase('https://movtin.firebaseio.com')

export const getAuth = firebaseRef.getAuth()

export const facebookLoginPopUp = () => {
  firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
    if (error) {
      console.log('Login Failed!', error)
    } else {
      store.dispatch({
        type: 'LOGIN1',
        data: authData.facebook
      })
      console.log(authData)
      firebaseRef.child('users').child(authData.uid).set({
        provider: authData.provider,
        name: authData.facebook.displayName,
        id: authData.facebook.id,
        avatar: authData.facebook.profileImageURL
      })
    }
  })
}

// save the whole state tree to firebase
export const saveMovieData = (userData) => {
  firebaseRef.child(`userData/${userData.userId}`).update(userData)
  console.log('data saved to firebase', userData)
}

// get the whole state tree from firebase
export const getProfileData = (userId, callback) => {
  firebaseRef.child(`userData/${userId}`).on('value', (snapshot) => callback(snapshot.val()))
}


// TODO: will need update here
export const cleanDatabase = () => {
  firebaseRef.child(`userData/`).update({})
  console.log('data cleaned at firebase')
}
