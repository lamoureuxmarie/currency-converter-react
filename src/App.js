import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const apiKey = 'a4937dabf29fee5b6211660456270fe3';
const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="Container">
        <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={fromCurrency} />
        <div className='Switch'>=</div>
        <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={toCurrency} />
      </div>
    </div>
  );
}

export default App;
