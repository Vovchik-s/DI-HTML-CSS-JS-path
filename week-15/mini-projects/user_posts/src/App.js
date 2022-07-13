import PostList from './components/PostList'
import UserList from './components/UserList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      < PostList title="List of Posts" />
      < UserList title="List of Users" />
      </header>
    </div>
  );
}

export default App;
