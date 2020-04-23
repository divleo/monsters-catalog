import React from 'react';

import './card-list-item.styles.css';

const CardListItem = ({ monster }) => (
  <div className="col">
    <div className="card-list-item">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x250`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  </div>
);

export default CardListItem;
