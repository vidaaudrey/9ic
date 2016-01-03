import store from '../store/store'

// just a helper function to log the store info,
// good for development and debugging purpose
export default () => {
  store.subscribe(() =>
    console.log('store updated',
      store.getState().get('userId'),
      store.getState().get('username'),
      store.getState().get('avatar'))
  )
}
