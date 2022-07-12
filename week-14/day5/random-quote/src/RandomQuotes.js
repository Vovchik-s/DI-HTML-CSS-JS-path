import React, { Component } from 'react';
import quotes from './QuotesDatabase';


class RandomQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            quote: ''
        }
    }

    componentDidMount() {
        this.setState({
            quotes: quotes, // set database as state
            quote: quotes[Math.floor(Math.random() * quotes.length)]
            // get random quote
        })
    }

    nextQuote() {
        this.setState({
            quote: quotes[Math.floor(Math.random() * quotes.length)]
            // get random quote
        })
    }

    // random_bg_color() {
    //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //     const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

    //     document.body.style.background = `linear-gradient(to right, ${'#' + randomColor2}, 
    //         ${'#' + randomColor})`;
    // }


    render() {
        return (

            <div class="quote-area">
                <blockquote class="quote">{this.state.quote.quote}</blockquote>
                <p>{this.state.quote.author}</p>

                <button onClick={() => this.nextQuote()}>Next Quote</button>
            </div>
        )
    }
}

export default RandomQuotes;

