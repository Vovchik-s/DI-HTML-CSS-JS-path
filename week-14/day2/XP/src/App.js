import './App.css';
import React from 'react'
import UserFavoriteColors from './UserFavoriteColors';
import SomeTags from './Exercise4';

// Exercise 1
// const noJsx = React.createElement('h1', {}, 'I do not use JSX')

// Exercise 2: With JSX
const jsx = <h1>Hello World!</h1>;
const jsx2 = <h1>I Love JSX!</h1>;
const sum = 5+5;

// Exercise 3 : Object


function App() {
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <header className="App-header">
      {/* {noJsx} */}
      {jsx}
      {jsx2}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>

      <UserFavoriteColors colors={user.fav_animals} />
      <SomeTags />

      </header>
    </div>
  );
}



export default App;

// Exercise 4 : HTML Tags In React
// Instructions
// PART I:

// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.

// Expected Output:(without the grey border)





// PART II:

// Add the below object to the component Exercise4. Use this object to style the <h1>.
// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };


// PART III:

// Create a new css file named Exercise4.css and import it in your Exercise4 component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }
