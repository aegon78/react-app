import { useState } from "react"
import ExpenseList from './components/expense-list'

function App() {
    const expenses =[ 
      {id: 1, description: 'aaa', amount: 3, category: 'Utilities'},
      {id: 1, description: 'bbb', amount: 3, category: 'Utilities'},
      {id: 1, description: 'ccc', amount: 3, category: 'Utilities'},
      {id: 1, description: 'ddd', amount: 3, category: 'Utilities'},
      {id: 1, description: 'eee', amount: 3, category: 'Utilities'},
      
    ]
  
  return(
    <ExpenseList expenses={expenses} onDelete={()=> console.log('deleted')}/>
  )
}

export default App