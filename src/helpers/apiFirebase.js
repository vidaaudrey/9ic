var Firebase = require('firebase')
export const firebaseRef = new Firebase('https://movtin.firebaseio.com')
export const getAuth = firebaseRef.getAuth()
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
        avatar: authData.facebook.profileImageUrl
      })
    }
  })
}
export const saveMovieData = (userData) => {
  console.log('saving to firebase', userData, userData.name)
  firebaseRef.child(`userData/${userData.name}`).update(userData)
}
export const getProfileData = (userId, callback) => {
  firebaseRef.child(`userData/${userId}`).on('value', (snapshot) => callback(snapshot.val()))
}
