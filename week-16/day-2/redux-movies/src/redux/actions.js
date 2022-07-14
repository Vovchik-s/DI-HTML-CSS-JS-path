export const MOVIE_SELECTED = 'MOVIE_SELECTED';

export const movieDetails = (movie) => {
    return {
        type: MOVIE_SELECTED,
        payload: movie
    }
}