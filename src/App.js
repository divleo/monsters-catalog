import React, { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      res
        .json()
        .then((res) =>
          res.map(({ id, name, email }) => ({
            id,
            name,
            email,
          }))
        )
        .then((data) => setMonsters(data));
    };
    fetchData();
  }, []);

  const filterMonsters = (searchField) => {
    if (!searchField) return monsters;

    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Monsters Catalog</h1>
        <SearchBox placeholder={'search monsters'} onSearchChange={setSearch} />
      </div>
      <CardList monsters={filterMonsters(search)} />
    </div>
  );
}

export default App;
