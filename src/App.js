import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const apiKey = 'a4937dabf29fee5b6211660456270fe3';
const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFromCurrency, setAmountFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountFromCurrency) {
    fromAmount = amount 
    toAmount = amount * exchangeRate || 0;
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() =>{
    if (fromCurrency != null && toCurrency != null) {
    fetch(`${API_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
    .then(res => res.json())
    .then(data => setExchangeRate(data.rates[toCurrency]))
    }

  }, [fromCurrency, toCurrency])


  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountFromCurrency(false)
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="Container">
        <CurrencyRow 
        currencyOptions={currencyOptions} 
        selectedCurrency={fromCurrency} 
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        amount={fromAmount} 
        onChangeAmount={handleFromAmountChange} />
        <div className='Switch'>=</div>
        <CurrencyRow 
        currencyOptions={currencyOptions} 
        selectedCurrency={toCurrency} 
        onChangeCurrency={e => setToCurrency(e.target.value)} 
        amount={toAmount} 
        onChangeAmount={handleToAmountChange} />
      </div>
    </div>
  );
}

export default App;
