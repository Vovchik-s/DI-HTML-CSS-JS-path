import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from './Customers'

function App() {
  const [users, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((users) => setUser(users));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Users</h3>
        <p>
          {users
            ? users.map((user) =>
              <ul key={user.id}>
                <li>{user.username}</li>
                </ul>
              )
            : "Loading..."}
        </p>

        <Customers />
        
      </header>
    </div>
  );
}
export default App;

