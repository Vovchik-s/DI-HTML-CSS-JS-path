import { connect } from 'react-redux';

const MovieDetails = (props) => {
    return (
        <div>
            <h1>Movie Details</h1>
            <div>
                <p>{props.movie.title?? `Title: ${props.movie.title}`}</p>
                <p>{props.movie.releaseDate?? `release Date: ${props.movie.releaseDate}`}</p>
                <p>{props.movie.rating?? `rating: ${props.movie.rating}`}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps)(MovieDetails);