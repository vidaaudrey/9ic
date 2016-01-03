import React from 'react'
import CircleImageLinkWidget from './CircleImageLinkWidget'
import MovieTextIntroWidget from './MovieTextIntroWidget'
import config from '../config/config'
import MovieItemVideosContainer from '../containers/MovieItemVideosContainer'

export default ({
  overview, id
}) => {
  return (
    <div className="movie-item-body">
        <div className="row movie-item-intro">
            <h3>Introduction</h3>
            <MovieTextIntroWidget len="50" />
            <MovieTextIntroWidget text={ overview } maxLen={ config.MOVIE_INTRO_MAX_LENGTH } />
        </div>
        <div className="row movie-item-video">
            <h3>Trailer</h3>
            <MovieItemVideosContainer id={id} />
        </div>
        <div className="row movie-item-who-liked">
            <h3>Who liked this movie</h3>
            <CircleImageLinkWidget/>
            <CircleImageLinkWidget/>
            <CircleImageLinkWidget/>
            <CircleImageLinkWidget/>
            <CircleImageLinkWidget/>
        </div>
    </div>
  )
}
