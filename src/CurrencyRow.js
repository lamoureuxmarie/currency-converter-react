import React from 'react';
import './CurrencyRow.css';

export default function CurrencyRow() {
  return (
    <div className='CurrencyRow'>
      <input type="number" />
      <select>
          <option value="EUR">EUR</option>
      </select>
    </div>
  )
}
