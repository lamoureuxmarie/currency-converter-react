import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const API_URL = 'https://api.currencylayer.com/live'

function App() {


  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="Container">
        <CurrencyRow />
        <div className='Switch'>=</div>
        <CurrencyRow />
      </div>
    </div>
  );
}

export default App;
