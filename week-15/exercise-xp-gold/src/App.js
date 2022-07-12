import './App.css';
import React from 'react';
import Modal from './Modal';
import ErrorBoundry from './ErrorBoundry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showError: false
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleError = () => {
    this.setState({ showError: true });
  }

  render() {
    if (this.state.showError) {
      <ErrorBoundry />
    } else {
      return (
        <div className="App">
          <header className="App-header">
            {this.state.showModal ? ( <Modal closeError={this.handleClose} /> ) : <button onClick={this.handleShow || this.handleError}>Occur an error</button>}
          </header>
        </div>
      );
    }
  }
}


export default App;
