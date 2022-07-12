import React from 'react';

// calculator add two numbers 
class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }

    add = () => {
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }

    render(){
        return (
            <div>
                <input type="number" value={this.state.num1} onChange={(e) => this.setState({num1: e.target.value})} />
                <input type="number" value={this.state.num2} onChange={(e) => this.setState({num2: e.target.value})} />
                <button onClick={this.add}>Add</button>

                <h1>{this.state.result}</h1>
            </div>
        )
    }

}

export default Calculator;