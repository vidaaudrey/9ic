import React from 'react'
import StarRatingWidget from './StarRatingWidget'
import GenreLinkWidget from './GenreLinkWidget'
import MovieTextIntroWidget from './MovieTextIntroWidget'
import LikeButtonsWidget  from './LikeButtonsWidget'
import PosterImageWidget from './PosterImageWidget'
import { getLevelByPopularity } from '../utils/dataOp'
import config from '../config/config'

export default ({ title, popularity, overview, poster_path }) => {
  console.log('movie', title, getLevelByPopularity(popularity), overview, `${config.TMDB_IMAGE_BASEURL}w500${poster_path}`);
  return (
   <div className="col-sm-12 col-md-6 col-lg-6">
       <div className="thumbnail clearfix movie-list-item">
           <PosterImageWidget image={ `${config.TMDB_IMAGE_BASEURL}w500${poster_path}` }/>
           <div className="col-sm-12 col-md-6 caption">
               <a className="movie-title" href="#">
                  <h4>{ title }</h4>
                </a>
               <StarRatingWidget level={getLevelByPopularity(popularity)} />
               <GenreLinkWidget/>
               <MovieTextIntroWidget text={ overview } maxLen={ config.OVERVIEW_MAX_LENGTH } maxHeight="40" />
               <LikeButtonsWidget/>
           </div>
       </div>
   </div>
  )
}
