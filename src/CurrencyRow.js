import React from 'react';
import './CurrencyRow.css';

export default function CurrencyRow(props) {
  const {
    currencyOptions
  } = props
  return (
    <div className='CurrencyRow'>
      <input type="number" />
      <select>
      {currencyOptions.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
      </select>
    </div>
  )
}
