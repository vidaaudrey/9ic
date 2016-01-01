import React from 'react'

export default ({ name }) => {
  return (
    <div className="col-xs-6 col-md-4 card-small genre-list-item">
      <a href="#" className="thumbnail">
        <div className="caption text-center">
          <h3>{name}</h3>
        </div>
      </a>
    </div>
  )
}
