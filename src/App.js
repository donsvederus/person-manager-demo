import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );

    // the code above gets compiled into example code below, Even though it looks like HTML it's JSX, React compiles it.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\m a React App?') );
  }
}

export default App;
