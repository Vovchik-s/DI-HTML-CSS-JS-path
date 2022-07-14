import React from 'react';
import { connect } from 'react-redux'; // connect is a function that takes a component and returns a new component
import { add,minus } from '../redux/actions';

const Counter = (props) => {
    return (
        <div>
        <h2>counter: {props.my_counter}</h2>
        <button onClick={props.increment}>Plus</button>
        <button onClick={props.decrement}>Minus</button>
        </div>
    );
    }

    const mapStateToProps = (state) => {
        return {
            my_counter: state.counter
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            increment: () => dispatch(add()),
            decrement: () => dispatch(minus())
        }
    }


    export default connect(mapStateToProps, mapDispatchToProps)(Counter);