import React, { Component } from 'react';


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            loaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    userData: data
                })
            }).catch(error => console.log(error))
    }
    render() {
        const { userData, loaded } = this.state;
        const { title } = this.props;
        console.log(userData)
        if (loaded) {
            return <div><h1 style={{ color: "red" }}>ERROR</h1></div>
        }
        return (
            <div>
                <h3>{title}</h3>
                <ul style={{ listStyleType: 'none',
                margin: '0',
                padding: '0',
                overflow: 'hidden',backgroundColor:' #333'}}>
                {
                    userData.map(user => (
                        <li key={user.id}>
                            <span style={{fontWeight: 'bold'}}>ID:</span>{user.id} <br/>
                            <span style={{fontWeight: 'bold'}}>Name:</span>{user.name} <br/>
                            <span style={{fontWeight: 'bold'}}>Username:</span>{user.username} <br/>
                            <span style={{fontWeight: 'bold'}}>Email:</span>{user.email} <br/>
                            <span style={{fontWeight: 'bold'}}>City:</span>{user.address.city} <br/><br/>
                        </li>
                    ))
                }
            </ul>
            </div >
        )
    }
}

export default PostList;

