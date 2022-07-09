import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

// faBuilding, faBuildingCircleArrowRight, faBuildingCircleCheck, faBuildingCircleExclamation, faBuildingCircleXmark, faBuildingColumns, faBuildingFlag, faBuildingLock, faBuildingNgo, faBuildingShield, faBuildingUn, faBuildingUser, faBuildingWheat


const Card = (props) => {
    // const element = <FontAwesomeIcon icon={faCoffee} />
    const element1 = <FontAwesomeIcon icon={faEarthAfrica} />
    const element2 = <FontAwesomeIcon icon={faLandmark} />
    const element3 = <FontAwesomeIcon icon={faBuilding} />



    return (
        <div className=' vw-100 ' style={{background:"#74C3E1", height: "70vh"}}>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='p-4 ' style={{fontSize: "100px"}}>{element3}</h1>
                <div className='p-5 '>
                    <h5 className='card-title'>  Lorem ipsum dolor sit. </h5>
                    <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum quam maiores corrupti tenetur. Voluptate earum optio dignissimos. Exercitationem voluptatibus quisquam sequi nemo ipsum dicta neque earum ipsa suscipit, rerum, odit minima? Eaque neque ipsam sed praesentium illo adipisci atque? Consequuntur praesentium excepturi nam eaque laborum, perspiciatis aut qui blanditiis laudantium optio, sequi culpa nihil reprehenderit tempore modi debitis voluptatibus cumque. Corporis saepe, similique autem quia voluptate earum neque eligendi! </p>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='p-4 font' style={{fontSize: "100px"}}>{element1}</h1>
                <div className='p-5 '>
                    <h5 className='card-title'>  Lorem ipsum dolor sit. </h5>
                    <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum quam maiores corrupti tenetur. Voluptate earum optio dignissimos. Exercitationem voluptatibus quisquam sequi nemo ipsum dicta neque earum ipsa suscipit, rerum, odit minima? Eaque neque ipsam sed praesentium illo adipisci atque? Consequuntur praesentium excepturi nam eaque laborum, perspiciatis aut qui blanditiis laudantium optio, sequi culpa nihil reprehenderit tempore modi debitis voluptatibus cumque. Corporis saepe, similique autem quia voluptate earum neque eligendi! </p>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='p-4 ' style={{fontSize: "100px"}}>{element2}</h1>
                <div className='p-5 '>
                    <h5 className='card-title'>  Lorem ipsum dolor sit. </h5>
                    <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum quam maiores corrupti tenetur. Voluptate earum optio dignissimos. Exercitationem voluptatibus quisquam sequi nemo ipsum dicta neque earum ipsa suscipit, rerum, odit minima? Eaque neque ipsam sed praesentium illo adipisci atque? Consequuntur praesentium excepturi nam eaque laborum, perspiciatis aut qui blanditiis laudantium optio, sequi culpa nihil reprehenderit tempore modi debitis voluptatibus cumque. Corporis saepe, similique autem quia voluptate earum neque eligendi! </p>
                </div>
            </div>
        </div>
    )
}

export default Card;
