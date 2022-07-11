import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        };
    }

    clickMe() {
        alert('I was clicked')
    }

    handleKeyPress(e) {
        if (e.which === 13) {	
            alert('Enter was pressed , input is : ' + e.target.value)
        }
    }

    switch() {
        if(this.state.isToggleOn) {
            this.setState({isToggleOn: false})
        } else {
            this.setState({isToggleOn: true})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click me !</button>
                <br />

                <input type="text" onKeyPress={this.handleKeyPress} placeholder='Press the ENTER key !' />
<br />
<h4>exercise 9:</h4>
                <button onClick={this.switch.bind(this)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> 
{/* It doesnt work until i bind this !!! */}
            </div>
        )
    }
}

export default Events;