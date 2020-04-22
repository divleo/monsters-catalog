import React from 'react';

import CardListItem from '../card-list-item/card-list-item.component';

import './card-list.styles.css';

function CardList(props) {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardListItem key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
