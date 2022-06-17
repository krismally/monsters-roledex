import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

// gets monsters from API
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input type="text" placeholder="Search Monsters" onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            })
    }
        }/>
        {
          filteredMonsters.map((monster, index) => {
            return <h1 key={index}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
