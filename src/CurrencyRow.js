import React from 'react';
import './CurrencyRow.css';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props
  return (
    <div className='CurrencyRow'>
      <input type='number' value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
      {currencyOptions.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
      </select>
    </div>
  )
}
