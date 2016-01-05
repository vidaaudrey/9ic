import React from 'react'

export default ({
  deleteCallback
}) => {
  return (
    <a href="#" onClick={deleteCallback} className="btn pull-right" role="button">
     <i className="fa fa-trash fa-2x"></i>
    </a>
  )
}
