import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Shep', age: 25},
      {name: 'Mannu', age: 21}
    ],
    otherstate: 'Manny'
  }

  clicked = (event) => {
    this.setState({
      persons: [
        {name: 'Maxx', age: 28},
        {name: event.target.value, age: 25},
        {name: this.state.otherstate, age: 21}
      ]
    })
    //  this.state.persons[0].name = "person0";
    //  this.state.persons[1].name = "person1";
    //  this.state.persons[2].name = "person2";
    // DON'T DO WHAT'S ABOVE
  }

//another way to style
  render() {
    const style = {
      cursor: 'pointer'
    };
/*----------------*/

    return (
      <div className="App">
        <h1> I'm a react app </h1>
        {/*<button style={style} onClick={() =>
          this.clicked('maxiimiilian')}> switch name </button> <br /><br />*/}

        <Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>

        <Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.clicked.bind(this, 'Shepy')}
        changed={this.clicked}> my hobbies: racing </Person>

        <Person name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
  );
  //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'does this work'));
  }
}

export default App;
