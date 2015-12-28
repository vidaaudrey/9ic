import api from './api'
import configSec from '../config/configSec'
import config from '../config/config'


const getGenre = () => {
    const url = `${config.TMDB_BASEURL}genre/movie/list?api_key=${configSec.TMDBKEY}`
    console.log('getting genre', url);
    return api.get(url)
}


export default {
    getGenre: getGenre
}

