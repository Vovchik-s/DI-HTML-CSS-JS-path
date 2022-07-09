import React from 'react';

const RenderPlanets = (props) => {
    return (
        props.planets.map((planet, index) => (
            <ul class="list-group" key={index}>
            <li class="list-group-item">{planet}</li>
            </ul>
        ))
    )
}

export default RenderPlanets;