import configSec from '../config/configSec'
import config from '../config/config'


const getPosterURLByMovie = (movie) => {
  return `${config.TMDB_IMAGE_BASEURL}w500${movie.poster_path}`
}

export default {
  getPosterURLByMovie: getPosterURLByMovie
}
