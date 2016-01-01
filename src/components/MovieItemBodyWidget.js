
import React from 'react'
import CircleImageLinkWidget from './CircleImageLinkWidget'
import MovieTextIntroWidget from './MovieTextIntroWidget'
export default () => {
// figure out a way to add youtube video without react complaining, also need to check the video format the TMDB provides
// <iframe width="100%" height="315" src="https://www.youtube.com/embed/VCTen3-B8GU" frameBorder="0" allowFullScreen></iframe>

  return (
    <div className="movie-item-body">
        <div className="row movie-item-intro">
            <h3>Introduction</h3>
            <MovieTextIntroWidget len="50" />
        </div>
        <div className="row movie-item-video">
            <h3>Trailer</h3>
            <b>Will add trailer here...</b>
            <img src="http://lorempixel.com/800/500/animals/"/>
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
