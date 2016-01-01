import React from 'react'
import StarRatingWidget from './StarRatingWidget'
import GenreLinkWidget from './GenreLinkWidget'
import MovieShortIntroWidget from './MovieShortIntroWidget'
import LikeButtonsWidget  from './LikeButtonsWidget'
import PosterImageWidget from './PosterImageWidget'

export default () => {
  return (
   <div className="col-sm-12 col-md-6 col-lg-4">
       <div className="thumbnail clearfix movie-list-item">
           <PosterImageWidget/>
           <div className="col-sm-12 col-md-6 caption">
               <a className="movie-title" href="#"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
               <StarRatingWidget/>
               <GenreLinkWidget/>
               <MovieShortIntroWidget/>
               <LikeButtonsWidget/>
           </div>
       </div>
   </div>
  )
}
