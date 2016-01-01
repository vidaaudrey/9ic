import React from 'react'
import HomeContainer from '../../containers/HomeContainer'
export default ({ history }) => {
  return (
    <div className="container" id="home-container">
        <div className="row vertical-align">
            <div className="col-xs-12 col-md-12 home-inner-box text-center">
                <HomeContainer history={ history }/>
            </div>
        </div>
    </div>
  )
}
