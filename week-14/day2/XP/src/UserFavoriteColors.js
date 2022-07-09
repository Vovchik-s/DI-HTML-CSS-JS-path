import React from 'react';

const UserFavoriteColors = (props) => {
    return (
        props.colors.map((color,index) => (
            <ul key={index}>
                <li>{color}</li>
            </ul>
        ))
    )
}

export default UserFavoriteColors;