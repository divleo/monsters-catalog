import React from 'react';

import CardListItem from '../card-list-item';

import './card-list.css';

function CardList(props) {
  const { monsters, handleClick } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <CardListItem
            key={monster.id}
            monster={monster}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default CardList;
