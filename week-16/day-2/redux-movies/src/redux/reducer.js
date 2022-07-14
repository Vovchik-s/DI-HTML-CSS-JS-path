import { MOVIE_SELECTED } from "./actions";
import { combineReducers } from "redux"

const initState = {
    movie_list: [
            {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
            {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
            {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
            {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
            {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
    ],
    movie: {}
}

export const reducer_list = (state = initState, action={}) => {
    return {...state, movie:action.payload}

}
export const reducer_details = (state = initState, action={}) => {
    switch (action.type) {
        case MOVIE_SELECTED:
            return { ...state, movie:action.payload }
        // case 'REMOVE_MOVIE':
        //     return {
        //         ...state,
        //         movie_list: state.movie_list.filter(movie => movie.title !== action.payload)
        //     }
        // case 'UPDATE_MOVIE':
        //     return {
        //         ...state,
        //         movie_list: state.movie_list.map(movie => {
        //             if (movie.title === action.payload.title) {
        //                 return action.payload
        //             }
        //             return movie
        //         }
        //         )
        //     }
        // case 'SEARCH_MOVIE':
        //     return {
        //         ...state,
        //         search: action.payload
        //     }
        // case 'SORT_MOVIE':
        //     return {
        //         ...state,
        //         sortBy: action.payload.sortBy,
        //         orderBy: action.payload.orderBy
        //     }
        default:
            return {...state}
    }
}

export const reducer = combineReducers (
    {
        reducer_list,
        reducer_details
    }
)