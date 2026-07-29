import React from 'react'


const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Desciption</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => <tr key={expense.id}>
            <td>{expense.desciption}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td><button className="btn btn-outline-danger" onClick={onDelete(expense.id)}></button></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ExpenseList