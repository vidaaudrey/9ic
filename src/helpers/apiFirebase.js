import store from '../store/store'
var Firebase = require('firebase')
export const firebaseRef = new Firebase('https://movtin.firebaseio.com')

export const getAuth = firebaseRef.getAuth()

// get the whole state tree from firebase
export const getProfileData = (userId, callback) => {
  firebaseRef.child(`userData/${userId}`).on('value', (snapshot) => callback(snapshot.val()))
}

export const facebookLoginPopUp = () => {
  firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
    if (error) {
      console.log('Login Failed!', error)
    } else {
      console.log(authData)
      firebaseRef.child('users').child(authData.uid).set({
        provider: authData.provider,
        name: authData.facebook.displayName,
        id: authData.facebook.id,
        avatar: authData.facebook.profileImageURL
      })

      getProfileData(authData.facebook.id, function (data) {
        if (!data) {
          console.log('--------firebase on login-start--no profile data-', data)
          store.dispatch({
            type: 'SETUP',
            data: authData.facebook,
            likes: [],
            dislikes: []
          })
        } else {
          console.log('--------firebase on login-start-- found profile data-', data)
          store.dispatch({
            type: 'LOGIN1',
            data: authData.facebook,
            likes: data.likes || [],
            dislikes: data.dislikes || []
          })
        }
      })
    }
  })
}


// save the whole state tree to firebase
export const saveMovieData = (userData) => {
  firebaseRef.child(`userData/${userData.userId}`).update(userData)
  console.log('data saved to firebase', userData)
}



// export const getProfileDataDispatchCallback = (id) => {
//   getProfileData(id, function (data) {
//     store.dispatch({
//       type: 'SET_STATE_LIKE',
//       data: data
//     })
//   })
// }


// TODO: will need update here
export const cleanDatabase = () => {
  firebaseRef.child(`userData/`).update({})
  console.log('data cleaned at firebase')
}
