import React from 'react'
import PosterImageWidget from './PosterImageWidget'
import StarRatingWidget from './StarRatingWidget'
import GenreLinkWidget from './GenreLinkWidget'
import MovieTextIntroWidget from './MovieTextIntroWidget'
import LikeButtonsWidget from './LikeButtonsWidget'

export default () => {
  return (
    <div className="row movie-item-header">
       <div className="thumbnail clearfix">
           <PosterImageWidget/>
           <div className="col-sm-6 col-md-6 caption">
               <a className="movie-title" href="#"><h4>Lorem ipsum dolor</h4></a>
               <StarRatingWidget/>
               <GenreLinkWidget/>
               <MovieTextIntroWidget/>
               <LikeButtonsWidget/>
           </div>
       </div>
   </div>
  )
}
