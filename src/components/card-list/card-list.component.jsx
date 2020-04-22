import React from 'react';

import CardListItem from '../card-list-item/card-list-item.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <CardListItem key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
