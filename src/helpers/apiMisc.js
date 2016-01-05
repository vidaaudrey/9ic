import api from './api'
import configSec from '../config/configSec'
import config from '../config/config'
import store from '../store/store'



const getFBAvatar = (id) => {
  const url = `${config.FB_BASE_URL}${id}/picture?type=${config.FB_DEFAULT_AVATAR_TYPE}&redirect=false&width=${config.FB_AVATAR_SIZE}&height=${config.FB_AVATAR_SIZE}`
    // console.log('getting facebook avatar', url)
  return api.get(url)
    .then(data => {
      return data.data
    })
}

const getAvatarByUserId = (userId) => {
  getFBAvatar(userId)
    .then(data => {
      if (!data.is_silhouette) {
        store.dispatch({
          type: 'ADD_AVATAR',
          avatar: data.url
        })
      }
    })
}

export default {
  getFBAvatar,
  getAvatarByUserId
}
