import React from 'react';
import './Exercise4.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};


const SomeTags = () => {

    return (
        <div>
            <h1 style={ style_header }>Hello</h1>
            <p className='para'>This is paragraph</p>
            <a href="">This is link</a>
            <form>
                <input type="text" placeholder="Enter somthingg" />
                <button>Submit</button>
            </form>
            <img src="https://source.unsplash.com/600x600/?cats" alt="" />
            <ul>
                <li>This is list</li>
                <li>This is list</li>
                <li>This is list</li>
            </ul>
        </div>
    )

}


export default SomeTags;
