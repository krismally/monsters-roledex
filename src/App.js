import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: 'Linda'
      },
      {
        name: 'Frank'
      },
      {
        name: 'Jacky'
      } 
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, index) => {
            return <h1 key={index}>{monster.name}</h1>
          })
        }
        <input type="text" />
        <input type="submit" />
      </div>
    );
  }
}

export default App;
