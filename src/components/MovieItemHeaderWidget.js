import React from 'react'
import PosterImageWidget from './PosterImageWidget'
import StarRatingWidget from './StarRatingWidget'
import GenreLinkWidget from './GenreLinkWidget'
import MovieTextIntroWidget from './MovieTextIntroWidget'
import LikeButtonsWidget from './LikeButtonsWidget'
import { getLevelByPopularity } from '../utils/dataOp'
import config from '../config/config'
import { Link } from 'react-router'

export default ({ title, popularity, overview, poster_path, id, release_date, homepage }) => {
  return (
    <div className="row movie-item-header">
       <div className="thumbnail clearfix">
           <PosterImageWidget image={ poster_path ? `${config.TMDB_IMAGE_BASEURL}w500${poster_path}` : null } targetLinkPath={ `/movie/${ id }/` } targetLinkText={ title }  placeholder="228x341" />
           <div className="col-sm-6 col-md-6 caption">
               <Link to={ `/movie/${ id }/` } className="movie-title">
                  <h4>{ title }</h4>
               </Link>
               <StarRatingWidget level={getLevelByPopularity(popularity)} />
               <GenreLinkWidget/>
               <p>
                  { release_date }
                  <a href={ homepage} > Home Page </a>
               </p>
               <MovieTextIntroWidget text={ overview } maxLen={ config.OVERVIEW_MAX_LENGTH } maxHeight="40" />
               <LikeButtonsWidget/>
           </div>
       </div>
   </div>
  )
}
