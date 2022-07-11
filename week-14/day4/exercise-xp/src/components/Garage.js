import React from 'react';

const Garage = ({ size }) => {
    // можно передать и деструкт. переменную, но т.к. это объект
    return (
        <div>
            <h4> Who lives in my {size} Garage? </h4>
        </div>
    )
}

export default Garage;
