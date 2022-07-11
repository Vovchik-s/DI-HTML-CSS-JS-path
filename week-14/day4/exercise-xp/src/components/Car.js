import React from "react";

const carinfo = {name: "Ford", model: "Mustang"};

class CarRender extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            carinfo: carinfo,
            color : "red"
        }; 
    }

    showInfo = () => {
        console.log({carinfo})

        this.setState ( { carinfo } );
    }

    render() {
        return (
            <div>
                <p>The car is : {this.state.color} {this.state.carinfo.name} {this.state.carinfo.model} </p>

            </div>
        )
    }
}

export default CarRender;