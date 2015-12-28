import React, {Component} from 'react'
import GenreListItem from './GenreListItem'

export default () => {
    return (
        <div className="row text-center">
            <h4>Movie Genre</h4>
            <div className="container " id="genre-list">
                    <GenreListItem />
                    {
                        [1,2,3,4,5,6,7,8].map((val, index) => (
                            <GenreListItem key={val} />
                            ))
                    }
            </div>
        </div>
    )
}