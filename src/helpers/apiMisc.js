import api from './api'
import configSec from '../config/configSec'
import config from '../config/config'

const getFBAvatar = (id) => {
  const url = `${config.FB_BASE_URL}${id}/picture?type=${config.FB_DEFAULT_AVATAR_TYPE}&redirect=false&width=${config.FB_AVATAR_SIZE}&height=${config.FB_AVATAR_SIZE}`
    // console.log('getting facebook avatar', url)
  return api.get(url)
    .then(data => {
      return data.data
    })
}

export default {
  getFBAvatar
}
