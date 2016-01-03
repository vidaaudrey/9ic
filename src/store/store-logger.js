import store from './store'
export default () => {
  store.subscribe(() =>
    console.log('store updated',
      store.getState().get('userId'),
      store.getState().get('username'),
      store.getState().get('avatar'))
  )
}
