import React from 'react'

const ExpenseFilter = ( {onSelectCategory} ) => {
  return (
    <select className="mb-3 form-select" onChange={ (e)=> onSelectCategory(e.target.value)}>
      <option value="">All categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default ExpenseFilter