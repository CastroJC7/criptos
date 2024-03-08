// src/App.js

import React from 'react';
import CryptoItem from './components/CryptoItem';
import data from './data/criptos.json';


function App() {
  return (
    <div>
      {data.criptomonedas.map((criptomoneda, index) => (
        <CryptoItem key={index} {...criptomoneda} />
      ))}
    </div>
  );
}

export default App;
