import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
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
