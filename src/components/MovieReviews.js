// Code MovieReviews Here
import React from 'react'

const Review = null

const MovieReviews = ({reviews}) => {
    return (<div className="review-list">
        {reviews.map(Review)}
    </div>)
}

export default MovieReviews