import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Contact = (props) => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <footer className="text-center p-4 bg-warning">
            <h1>Conatct us</h1>
            <div className="d-flex justify-content-md-around">
                <div className="contactInfo">
                    <p>Contact us and we will get back to you within 24 hours</p>
                    <p>
                        {locationIcon} Company Name
                    </p>
                    <p>
                        {phoneIcon} +256 778 800 900
                    </p>
                    <p>
                        {emailIcon} company.gmail.com
                    </p>

                </div>

                <form className='contactForm'>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Comment</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Enter your comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">send</button>
                </form>
            </div>
        </footer>
    )
}

export default Contact
