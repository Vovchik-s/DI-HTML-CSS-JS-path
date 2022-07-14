import React from 'react';
import { connect } from 'react-redux';
import { movieDetails } from '../redux/actions';


class MovieList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <h1>Movie List</h1>
                {
                    this.props.movies.map((item, i) => {
                        return (
                            <div key={i}>
                                <h3>{item.title}</h3>
                                <button onClick={() => this.props.getDetails(item)}>Details</button>
                            </div>
                        )
                    }
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie_list
    }
}

const mapDispatcheToProps = (dispatch) => {
    return {
        getDetails: (movie) => { dispatch(movieDetails(movie)) }
    }
}


export default connect(mapStateToProps, mapDispatcheToProps)(MovieList);
