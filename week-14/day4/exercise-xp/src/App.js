import CarRender from './components/Car';
import Garage from './components/Garage'
import Events from './components/Events'
import Phone from './components/Phone'
import Color from './components/Color'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarRender />
        <Garage size='small' />
        <Events />
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;
