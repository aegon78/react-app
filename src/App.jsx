import { useState } from "react"
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from "./components/ExpenseFilter"

function App() {
    const [expenses, setExpenses] = useState([ 
      {id: 1, description: 'aaa', amount: 3, category: 'Utilities'},
      {id: 2, description: 'bbb', amount: 3, category: 'Utilities'},
      {id: 3, description: 'ccc', amount: 3, category: 'Utilities'},
      {id: 4, description: 'ddd', amount: 3, category: 'Utilities'},
      {id: 5, description: 'eee', amount: 3, category: 'Utilities'},
    ])
  
  return(
    <>
      <ExpenseFilter onSelectCategory={(category)=> console.log(category)}/>
      <ExpenseList expenses={expenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}/>
    </>
  )
}

export default App