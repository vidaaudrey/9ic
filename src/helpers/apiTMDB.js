import api from './api'
import configSec from '../config/configSec'
import config from '../config/config'


// get all movies
// filter options: now_playing, popular, top_rated, upcoming
const getMovies = (filter) => {
  const url = `${config.TMDB_BASEURL}movie/${filter}?api_key=${configSec.TMDBKEY}`
  // console.log('getting movies', url)
  return api.get(url)
}

const getGenre = () => {
  const url = `${config.TMDB_BASEURL}genre/movie/list?api_key=${configSec.TMDBKEY}`
  console.log('getting genres', url)
  return api.get(url)
}

const getMoviesByGenreId = (id) => {
  const url = `${config.TMDB_BASEURL}genre/${id}/movies?api_key=${configSec.TMDBKEY}`
  console.log('getting movies by genre id', url)
  return api.get(url)
}

// not using it so far
const getOneMovieForEachGenre = () => {
  return getGenre()
        .then(function (data) {
          return Promise.all(data.genres.map((g, index) => (
                    getMoviesByGenreId(g.id)
                    )
                )
            ).then((values) => (
                { genreMovies: values.map((val) => val.results.slice(0, 1)) }
            ))
        })
}

// not using it so far
const getOnePosterForEachGenre = () => {
  return getOneMovieForEachGenre()
         .then(function (data) {
           return data.genreMovies.map((val) => `${config.TMDB_IMAGE_BASEURL}w500${val[0].poster_path}`)
         })
}


export default {
  getGenre: getGenre,
  getMovies: getMovies,
  getMoviesByGenreId: getMoviesByGenreId,
  getOneMovieForEachGenre: getOneMovieForEachGenre,
  getOnePosterForEachGenre: getOnePosterForEachGenre
}
