import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    fetchReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results}));
    }

    render() {
        return (
        <div>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }

}

export default SearchableMovieReviewsContainer