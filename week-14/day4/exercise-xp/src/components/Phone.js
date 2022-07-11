import React from "react";

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    clickMe() {
        alert('I was clicked')
    }

    changeColor() {
        this.setState({color: "blue"})
    }

    render() {
        return (
            <div>
                <h1> My phone is a {this.state.brand} </h1>
                <h3>It is {this.state.color} {this.state.model} from {this.state.year} </h3>
                <button onClick={this.changeColor.bind(this)}>Change color</button>
                {/* got this 'bind' thing now */}
            </div>
        )
    }
}

export default Phone;