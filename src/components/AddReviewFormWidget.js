import React from 'react'

export default () => {
  return (
    <div className="row add-review-form">
       <h4>Add My Review</h4>
       <form action="" method="POST" role="form">
           <div className="form-group">
               <textarea name="review-text" className="form-control" rows="3" required></textarea>
           </div>
           <button type="submit" className="btn btn-primary pull-right">Submit
           </button>
       </form>
   </div>
  )
}
