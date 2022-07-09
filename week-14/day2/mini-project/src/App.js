import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Contact />
    </div>
  );
}

export default App;
