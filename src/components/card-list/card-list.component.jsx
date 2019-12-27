import React from 'react';

import './card-list.styles.css';

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        const styles = {
          cursor: 'pointer',
          userSelect: 'none',
          textDecoration: monster.active ? 'line-through' : null,
        };

        return (
          <h1
            key={monster.id}
            style={styles}
            onClick={() => props.handleClick(monster.id)}
          >
            <hr />
            {`name: ${monster.name}`}
            <br />
            {`email: ${monster.email}`}
            <hr />
          </h1>
        );
      })}
    </div>
  );
}

export default CardList;
