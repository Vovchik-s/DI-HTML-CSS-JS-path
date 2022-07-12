import './Modal.css';

const Modal = ({ closeError }) => {
    return (
        <div className="modal">
                <div>
                    <h2>Error</h2>
                </div>
                <div className="modal-body">
                    <p>Something went wrong!</p>
                </div>
                <div className="modal-footer">
                    <button onClick={closeError}>close</button>
                </div>
        </div>
    );
}

    export default Modal;
