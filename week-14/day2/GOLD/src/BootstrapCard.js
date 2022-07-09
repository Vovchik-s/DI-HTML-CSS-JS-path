import React from 'react';

const BootstrapCard = (props) => {
    return (
        props.celebrities.map(celebrity => (
            <div className="card m-5" style={{ width: '30rem' }}>
                <img src={celebrity.imageUrl}className="card-img-top" alt="..." >
                </img>
                <div className="card-body">
                    <h5 className="card-title">{celebrity.title} </h5>
                    <p className="card-text">{celebrity.description}</p>
                    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Wiki</a>
                </div>
            </div>
        ))
        )
}

export default BootstrapCard;