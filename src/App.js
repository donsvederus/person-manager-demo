import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

//  class App extends Component {
class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Don', age: 21 },
      { id: 'adsfg2', name: 'John', age: 33 },
      { id: 'adsfgb3', name: 'Mary', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    person[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // this is how to do inline styles
  render () {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={index.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (   
      // this code is not html, it's JSX, it will get compiled, so there are some restrictions.
      // we cannot use class for CSS, we use className
      // we should wrap everything in a div or root element, later updates may allow to edit outside the containers.
      <div className="App">  
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }

    // the code above gets compiled into example code below, Even though it looks like HTML it's JSX, React compiles it.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\m a React App?') );
}

export default App;


