import React, { Component } from 'react';


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            }).catch(error => { this.setState({ errorMsg: error }) })
    }
    // userId: 1, id: 1, title
    render() {
        const { posts, errorMsg } = this.state;
        const { title } = this.props;
        console.log(posts)
        if (errorMsg) {
            return <div>{errorMsg}</div>
        }
        return (
            <div>
                <h3>{title}</h3>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                                <span style={{ fontWeight: 'bold' }}>ID:</span>{post.id} <br />
                                <span style={{ fontWeight: 'bold' }}>Title:</span>{post.title} <br />
                                <span style={{ fontWeight: 'bold' }}>Body:</span>{post.body} <br /><br />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;

