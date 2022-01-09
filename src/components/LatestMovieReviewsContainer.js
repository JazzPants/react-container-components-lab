import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    // const NYT_API_KEY = 'your-key-here';
    // const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    //             + `api-key=${NYT_API_KEY}`;

    // componentDidMount() {

    // }

            fetchReviews = () => {
            fetch(URL)
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results}));
        }


    // .then(({data}) => {
    //     this.setState({
    //         reviews: data.map(movie => ({reviews: movie}))
    //     })
    // })

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>The Latest Movie Reviews:</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}



export default LatestMovieReviewsContainer