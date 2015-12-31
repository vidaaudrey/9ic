import React from 'react'
import ExploreLinksWidget from '../../components/ExploreLinksWidget'
import MovieSearchWidget from '../../components/MovieSearchWidget'
export default () => {
  return (
    <div className="row">
      <div className="container" id="genre-list">
        <div className="links">
          <a href="genre/genre-list.html" title="">Genre ? </a>
          <ExploreLinksWidget/>
          <MovieSearchWidget/>
        </div>
      </div>
    </div>
  )
}
