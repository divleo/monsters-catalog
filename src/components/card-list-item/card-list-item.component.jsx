import React from 'react';

function CardListItem(props) {
  const { monster, handleClick } = props;

  const styles = {
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: monster.active ? 'line-through' : null,
  };

  return (
    <div className="card-list-item">
      <h2 style={styles} onClick={() => handleClick(monster.id)}>
        <hr />
        Name: {monster.name}
        <br />
        Email: {monster.email}
        <hr />
      </h2>
    </div>
  );
}

export default CardListItem;
