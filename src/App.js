import React, { useEffect, useState } from 'react';

import './App.css';

import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      const monsters = data.map(({ id, name, email }) => ({ id, name, email }));

      setMonsters(monsters);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  const filteredMonsters = !search
    ? monsters
    : monsters.filter((monster) =>
        monster.title.toUpperCase().includes(search.toUpperCase())
      );

  return (
    <div className="container">
      <Header title={'Monsters Catalog'}>
        <SearchBox
          placeholder={'search monsters'}
          handleSearch={handleSearch}
        />
      </Header>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
