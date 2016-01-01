import React from 'react'
import { Link } from 'react-router'
export default () => {
  return (
    <div className="explore-links">
        <ul className="list-inline">
            <li> <Link to = '/movies/popular' > Popular </Link></li>
            <li> <Link to = '/movies/now_playing' > Now Playing </Link></li>
            <li> <Link to = '/movies/top_rated' > Top Rated </Link></li>
            <li> <Link to = '/movies/upcoming' > Upcoming </Link></li>
        </ul>
    </div>
  )
}
