import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const apiKey = '471ba6182c32b538f2436aaa4515d114';
const API_URL = `http://api.currencylayer.com/live?access_key=${apiKey}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.source, ...Object.keys(data.quotes)])
      })
  }, [])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="Container">
        <CurrencyRow currencyOptions={currencyOptions} />
        <div className='Switch'>=</div>
        <CurrencyRow currencyOptions={currencyOptions} />
      </div>
    </div>
  );
}

export default App;
