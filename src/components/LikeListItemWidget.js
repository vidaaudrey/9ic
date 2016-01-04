import React from 'react'
import PosterImageWidget from './PosterImageWidget'

import {
  Link
}
from 'react-router'


export default ({
  title, poster, id
}) => {
  // console.log('movie', title, getLevelByPopularity(popularity), overview, `${config.TMDB_IMAGE_BASEURL}w500${poster_path}`);
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
       <div className="thumbnail clearfix movie-list-item">
           <PosterImageWidget image={poster} targetLinkText={ title }  placeholder="228x341" />
           <div className="col-sm-12 col-md-6 caption">
               <Link to={ `/movie/${ id }/` } className="movie-title">
                  <h4>{ title }</h4>
                </Link>
           </div>
       </div>
   </div>
  )
}
