import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const apiKey = 'a4937dabf29fee5b6211660456270fe3';
const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
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
