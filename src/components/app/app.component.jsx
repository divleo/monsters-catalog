import React from 'react';

import SearchBox from '../search-box/search-box.component';
import CardList from '../card-list/card-list.component';

import './app.styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const monsters = users.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });

        return monsters;
      })
      .then((monsters) => this.setState({ monsters }));
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters =
      searchField.length === 0
        ? monsters
        : monsters.filter((monster) => {
            return monster.name
              .toLowerCase()
              .includes(searchField.toLowerCase());
          });

    return (
      <div className="app">
        <SearchBox
          placeholder={'search monsters'}
          onSearchChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
