import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import List from './components/List';

const infoApiURL = 'http://www.mocky.io/v2/5e60f62433000064cf97be10';
const reposApiURL = 'https://api.github.com/users/rafamatoso/repos';
const starredApiURL = 'https://api.github.com/users/rafamatoso/starred';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infos apiURL={infoApiURL} />
        <List apiURL={reposApiURL} title="Minha lista de repos" />
        <List apiURL={starredApiURL} title="Minha lista de favoritos" />
      </div>
    );
  }
}

export default App;
