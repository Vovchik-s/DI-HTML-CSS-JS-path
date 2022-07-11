import React from "react";

class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            age: null,
            car : 'Volvo'
        };
    }

    stateChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        this.setState({
            [name]: value,
        });
    }

    mySubmitHandler = (e) => {
        e.preventDefault();
        if ( this.state.age === null || this.state.age === '') {
            alert('Please enter your age !');
        }else{
            alert(`You are submiting ${this.state.username}`);
        }
        
    }


    render() {
        let header = '';
        if (this.state.username.split('').length > 3) {
            header = <h4>Hello {this.state.username}</h4>;
        }
        return (
            <div>
                {/* Part II : Conditional Rendering */}
                <form action="" onSubmit={this.mySubmitHandler}>
                    <h5 style={{ display: this.state.username.split('').length > 3 ? 'none' : 'block' }}>Will visible only if length bigger that 3 </h5>
                    {header}
                    <label htmlFor="name">Enter your name:</label>
                    <input name="username" type="text" onChange={this.stateChange}
                    />
                    <br />
                    <label htmlFor="age">Enter your age:</label>
                    <input name="age" type="number" onChange={this.stateChange}
                    /> 
                    <h5 style={{ display: this.state.age === null ? 'block' : 'none' }}>Your age must be a number </h5>
                    <br />

                    <h2>Hello {this.state.username} {this.state.age}</h2>
                    <button type="submit">Submit</button>
                </form>

                <br />
                <select name="car" onChange={this.stateChange}>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>

                {/* Part V : Validating Form Input */}

            

            </div>
        )
    }
}

export default Forms;