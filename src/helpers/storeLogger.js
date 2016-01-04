import store from '../store/store'

// just a helper function to log the store info,
// good for development and debugging purpose
export default () => {
  store.subscribe(() => {
    console.log('*******store updated', store.getState().toObject())
      //   'userId: ',
      //   store.getState().get('userId'),
      //   'username: ',
      //   store.getState().get('username'),
      //   'avatar: ',
      //   store.getState().get('avatar'))

    // if (store.getState().get('likes')) {
    //   console.log(
    //     'Likes: ',
    //     store.getState().get('likes'),
    //     'Dislikes: ',
    //     store.getState().get('dislikes'))
    // }
  })
}
