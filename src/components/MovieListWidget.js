import React from 'react'
import MovieListItemWidget from './MovieListItemWidget'
import PagerWidget from './PagerWidget'
import NoContentWidget from './NoContentWidget'
import ExploreLinksWidget from './ExploreLinksWidget'

function renderMoviesHTML(movies) {
  if (movies.length < 1) {
    return (
      <div>
            <NoContentWidget message="No movie found" />
            <p> Check more: </p> <ExploreLinksWidget />
        </div>
    )
  }
  const moviesHTML = (
    movies.map((movie) => <MovieListItemWidget key={ movie.id } {...movie} />)
  )
  return (
    <div> <PagerWidget/> { moviesHTML } </div>
  )
}

function renderHeaderHTML(isLoading, isSearch) {
  if (isLoading && isSearch) {
    return (<h2>Retrieving movie data by search ... </h2>)
  }
  if (isLoading && !isSearch) {
    return (<h2>Retrieving movie data ... </h2>)
  }
  if (!isLoading && isSearch) {
    return (<h2> Search Results:  </h2>)
  }
  return null
}

export default ({
  movies, isLoading, isSearch = true
}) => {
  return (
      <div className="col-sm-12 col-md-12 movie-list">
        {renderHeaderHTML(isLoading, isSearch)}
        { isLoading ? null : renderMoviesHTML(movies) }
    < /div>
    )
}
