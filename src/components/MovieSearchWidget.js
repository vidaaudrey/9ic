import React from 'react'

export default () => {
  return (
    <div class="movie-search">
       <form class="form-inline" role="search">
           <div class="form-group">
               <input type="text" class="form-control" size="36" maxlength="100" placeholder="The Day After..."/>
           </div>
           <button type="submit" class="btn btn-success">Go</button>
       </form>
   </div>
  )
}
