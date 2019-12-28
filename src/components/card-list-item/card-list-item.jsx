import React from 'react';

import './card-list-item.css';

function CardListItem(props) {
  const { monster, handleClick } = props;

  const styles = {
    textDecoration: monster.active ? 'line-through' : null,
  };

  return (
    <div
      className="card-list-item"
      style={styles}
      onClick={() => handleClick(monster.id)}
    >
      <h2>Name: {monster.name}</h2>
      <p>Email: {monster.email}</p>
    </div>
  );
}

export default CardListItem;
