import React from 'react';

import './App.css';

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
      <div className='App'>
        <ul>
          {this.state.monsters.map((monster) => {
            const styles = {
              listStyleType: 'none',
              textDecoration: monster.active ? 'line-through' : null,
            };

            return (
              <li
                key={monster.id}
                style={styles}
                onClick={() => this.handleClick(monster.id)}
              >
                <hr />
                {`name: ${monster.name}`}
                <br />
                {`email: ${monster.email}`}
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
