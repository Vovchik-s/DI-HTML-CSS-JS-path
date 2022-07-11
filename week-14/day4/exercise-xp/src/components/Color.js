import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ favoriteColor: "yellow" })
        }, 5000)
    }

    changeColor() {
        this.setState({ favoriteColor: "blue" })
    }

    render() {
        return (
            <div>
                <h3>My favorite color is {this.state.favoriteColor}</h3>
                <button onClick={this.changeColor.bind(this)}>Change color</button>
            </div>
        )
    }
}

export default Color;