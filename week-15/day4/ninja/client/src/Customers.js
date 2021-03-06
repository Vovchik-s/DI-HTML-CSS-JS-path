import React from "react";

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch("api/customers/")
            .then(res => res.json())
            .then(customers => this.setState({ customers: customers }))
    }


    render() {
        return (
            <div>
                <h3>Customers</h3>
                <ul>
                    {this.state.customers.map(customer => 
                    <li key={customer.id}>
                        {customer.firstName} {customer.lastName}
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default Customers;