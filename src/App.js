import { Component } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from "./components/search-box/SearchBox"
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

  // 
  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    // Destructured
    const { monsters,searchField } = this.state;
    const { onSearchChange } = this;

    // Store updating filtered list of monsters in new array based on search field
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="search-box" />
        <CardList monsters={filteredMonsters}/>
      </div>
    )};
};

export default App;
