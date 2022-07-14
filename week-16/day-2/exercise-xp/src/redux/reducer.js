import { PLUS, MINUS } from './actions';

const initState = {
    counter: 0
}

export const reducer = (state = initState, action = {}) => {
    // reducer is a function that takes in state and action and returns a new state 
    switch (action.type) {
        case PLUS:
            return {...state, counter: state.counter + 1}
        case MINUS:
            return {...state, counter: state.counter - 1}
        default:
            return { ...state }
    }

}
