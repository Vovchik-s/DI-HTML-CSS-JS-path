import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {  // All time in state
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        };
}

    componentDidMount() {  // Update time every second
        this.interval = setInterval(()=>{
            this.setState({
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            });
        },1000);
    }

    render() {
        return (
            <div>
                <h4>{this.state.year}</h4>
                <h2>Month: {this.state.month}</h2>
                <h2>Day:{this.state.day}</h2>
                <h2>{this.state.hour}:{this.state.minute}:{this.state.second}</h2>
            </div>
        );
    }
}

export default Clock;