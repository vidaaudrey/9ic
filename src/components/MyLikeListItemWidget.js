import React from 'react'
import {
  Link
}
from 'react-router'


export default ({
  title, poster, id, placeholder = '300x300'
}) => {
  // console.log('movie', title, getLevelByPopularity(popularity), overview, `${config.TMDB_IMAGE_BASEURL}w500${poster_path}`);
  return (
    <div className="col-sm-4 col-md-3 my-like-list-item">

       <div className="thumbnail">
          <Link to={ `/movie/${ id }/` } className="movie-title">
            <img src={ poster || `./assets/placeholder${ placeholder }.png` } alt={ `image for ${ title }`}/>
         </Link>
         <div className="caption">
          <Link to={ `/movie/${ id }/` } className="movie-title">
              <h4>{ title }</h4>
          </Link>
           <a href="#" className="btn pull-right" role="button">
            <i className="fa fa-trash fa-2x"></i>
           </a>
         </div>
       </div>
     </div>
  )
}
