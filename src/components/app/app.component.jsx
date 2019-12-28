import React from 'react';

import CardList from '../card-list/card-list.component';

import './app.styles.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const data = users.map((user) => {
          const { id, name, email } = user;
          return { id, name, email, active: false };
        });

        this.setState({ monsters: data });
      });
  }

  handleClick(id) {
    this.setState(({ monsters }) => {
      return {
        monsters: monsters.map((monster) => {
          if (monster.id === id) {
            return { ...monster, active: !monster.active };
          }

          return monster;
        }),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <CardList
          monsters={this.state.monsters}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
