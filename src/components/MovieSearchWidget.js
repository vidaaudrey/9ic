import React from 'react'

export default () => {
  return (
    <div className="movie-search">
       <form className="form-inline" role="search">
           <div className="form-group">
               <input type="text" className="form-control" size="36" maxLength="100" placeholder="The Day After..."/>
           </div>
           <button type="submit" className="btn btn-success">Go</button>
       </form>
   </div>
  )
}
